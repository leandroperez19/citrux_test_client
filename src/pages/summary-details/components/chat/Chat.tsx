import { SummaryById } from "@/services/summaryService.types";
import { FC } from "react";
import { ChatWrapper } from "./Chat.styled";
import { Input } from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useForm } from "react-hook-form";
import { createMessageBody, createMessageForm } from "@/schemas/chatSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { createMessageReq } from "@/services/chatService";
import { createMessagePayload } from "@/services/chatService.types";
import { toast } from "react-toastify";

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

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: (payload: createMessagePayload) => createMessageReq(payload)
    })

    const onSubmit = async (data: CreateMessageFormValue) => {
        const body = { summaryId: summary._id, question: data.question }
        const validBody = createMessageBody.safeParse(body);

        if(!validBody.success) {
            toast('Sorry, we couldn\'t process that question');
            return
        }

        const res = await mutateAsync(validBody.data);
        console.log(res)
        reset()
    }

    return (
        <ChatWrapper>
            <div className="messages"></div>
            <form className="message-field flex gap-3 items-center mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="input basis-5/6 basis">
                    <Input
                        {...register("question", { required: true })}
                        errorMessage={
                            errors.question && errors.question.message?.toString()
                        }
                        disabled={isLoading}
                    />
                </div>
                <Button tailwindClass="flex items-center justify-center basis-1/6" type="submit">
                    <span className="material-symbols-outlined">send</span>
                </Button>
            </form>
        </ChatWrapper>
    );
};
