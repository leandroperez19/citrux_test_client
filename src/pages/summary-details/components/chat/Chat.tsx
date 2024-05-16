import { SummaryById } from "@/services/summaryService.types";
import { FC, useEffect, useRef, useState } from "react";
import { ChatWrapper } from "./Chat.styled";
import { Input } from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useForm } from "react-hook-form";
import { createMessageBody, createMessageForm } from "@/schemas/chatSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "react-query";
import { createMessageReq, getMessagesReq } from "@/services/chatService";
import { Messages, createMessagePayload } from "@/services/chatService.types";
import { toast } from "react-toastify";
import { BaseError } from "@/services/requestHandler";
import Message, { ErrorMessage } from "../message/message";
import DefaultLoader from "@/components/Loaders/DefaultLoader";

type ChatProps = {
    summary: SummaryById["summary"];
};

interface CreateMessageFormValue {
    question: string;
}

export const Chat: FC<ChatProps> = ({ summary }) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateMessageFormValue>({
        resolver: zodResolver(createMessageForm),
    });

    const [messages, setMessages] = useState<Messages["messages"] | null>(null);
    const [errorMessage, setErrorMessage] = useState<BaseError | null>(null);

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: (payload: createMessagePayload) =>
            createMessageReq(payload),
    });

    const {
        data: messagesRes,
        isLoading: messagesLoading,
        refetch,
    } = useQuery({
        queryFn: () => getMessagesReq(summary._id),
        queryKey: ["messages"],
        refetchOnWindowFocus: false,
    });

    const onSubmit = async (data: CreateMessageFormValue) => {
        const body = { summaryId: summary._id, question: data.question };
        const validBody = createMessageBody.safeParse(body);

        if (!validBody.success) {
            toast("Sorry, we couldn't process that question", {
                type: "error",
            });
            return;
        }

        const res = await mutateAsync(validBody.data);
        if (res.code === "error") {
            setErrorMessage(res.error);
            return;
        }
        setErrorMessage(null);
        refetch();
        reset();
    };

    const getAllMessages = () => {
        if (!messagesRes) return;
        if (messagesRes.code === "error") return setMessages([]);
        if (messagesRes.code === "success") {
            setMessages(messagesRes.data.messages);
        }
    };

    useEffect(() => {
        getAllMessages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messagesRes]);

    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [messages, errorMessage]);

    return (
        <ChatWrapper>
            <div className="label">Ask something about this article</div>
            <div className="messages mt-5" ref={ref}>
                <Content messages={messages} isLoading={messagesLoading} errorMessage={errorMessage}/>
            </div>
            <form
                className="message-field flex gap-3 items-start mt-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="input basis-5/6 basis">
                    <Input
                        {...register("question", { required: true })}
                        errorMessage={
                            errors.question &&
                            errors.question.message?.toString()
                        }
                        disabled={isLoading || messagesLoading}
                    />
                </div>
                <Button
                    tailwindClass="flex items-center justify-center basis-1/6"
                    type="submit"
                    disabled={isLoading || messagesLoading}
                >
                    <span className="material-symbols-outlined">send</span>
                </Button>
            </form>
        </ChatWrapper>
    );
};

type ContentProps = {
    messages: Messages['messages'] | null,
    isLoading: boolean,
    errorMessage: BaseError | null
}

const Content: FC<ContentProps> = ({ messages, isLoading, errorMessage }) => {
    if(isLoading) return <div className="h-full w-full flex items-center justify-center"><DefaultLoader /></div>

    if(!messages || messages.length === 0 && !errorMessage) return <NoMessages />

    if(messages.length === 0 && errorMessage) return <ErrorMessage errorMessage={errorMessage}/> 

    return(
        <div className="messages-content">
            {
                messages.map((message, i) => <Message message={message} key={i}/>)
            }
            {
                errorMessage && <ErrorMessage errorMessage={errorMessage}/>
            }
        </div>
    )
}

const NoMessages: FC = () => {
    return (
        <span className="no-messages text-sm">
            Seems like you don't have any messages, start a conversation by
            asking something about the article on the input below
        </span>
    );
};
