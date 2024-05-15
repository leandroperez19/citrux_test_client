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
import {
    Messages,
    createMessagePayload,
} from "@/services/chatService.types";
import { toast } from "react-toastify";
import moment from "moment";


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
    const [errorMessage, setErrorMessage] = useState(false);

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: (payload: createMessagePayload) =>
            createMessageReq(payload),
    });

    const { data: messagesRes, isLoading: messagesLoading, refetch } = useQuery({
        queryFn: () => getMessagesReq(summary._id),
        queryKey: ["messages"],
        refetchOnWindowFocus: false,
    });

    const onSubmit = async (data: CreateMessageFormValue) => {
        const body = { summaryId: summary._id, question: data.question };
        const validBody = createMessageBody.safeParse(body);

        if (!validBody.success) {
            toast("Sorry, we couldn't process that question");
            return;
        }

        const res = await mutateAsync(validBody.data);
        if(res.code === 'error') {
            setErrorMessage(true);
            return
        }

        refetch()
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

    return (
        <ChatWrapper>
            <div className="label">Chat with AI</div>
            <div className="messages mt-5">
                {messages && messages.length > 0 ? (
                    <MessagesContainer messages={messages} errorMessage={errorMessage}/>
                ) : (
                    <span className="no-messages text-sm">
                        Seems like you don't have any messages, start a
                        conversation by asking something about the article on
                        the input below
                    </span>
                )}
            </div>
            <form
                className="message-field flex gap-3 items-center mt-5"
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

type MessagesProps = {
    messages: Messages['messages'];
    errorMessage: boolean
}

const MessagesContainer: FC<MessagesProps> = ({ messages, errorMessage }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) {
          ref.current.scrollTop = ref.current.scrollHeight;
        }
      }, [messages]); 


    return(
        <div className="messages" ref={ref}>
            {
                messages.map((msg, i) => (
                <div className={`message ${msg.from === "AI" ? "from-ai" : "from-you"}`} key={i}>
                    <div className="message-text">
                        {msg.message}
                    </div>
                    <div className="message-footer flex justify-end items-center py-1">
                        <span>{moment(msg.createdAt).fromNow()}</span>
                    </div>
                </div>
                ))
            }
            {
                errorMessage && 
                <div className="message error from-ai">
                    <div className="message-text">Sorry, but I can't process that question</div>
                    <div className="message-footer flex justify-end items-center py-1">
                        <span>{moment(new Date()).fromNow()}</span>
                    </div>
                </div>
            }
        </div>
    )
}
