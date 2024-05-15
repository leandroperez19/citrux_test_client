import { FC } from "react";
import { ErrorMessageWrapper, MessageWrapper } from "./message.styled";
import moment from "moment";
import { BaseError } from "@/services/requestHandler";

type MessageProps = {
    message: {
        from: string;
        message: string;
        _id: string;
        userId: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
        summaryId: string;
    };
};

const Message: FC<MessageProps> = ({ message }) => {
    return (
        <MessageWrapper
            className={`message ${
                message.from === "AI" ? "from-ai" : "from-you"
            }`}
        >
            <div className="message-text">{message.message}</div>
            <div className="message-footer flex justify-end items-center py-1">
                <span>{moment(message.createdAt).fromNow()}</span>
            </div>
        </MessageWrapper>
    );
};

type ErrorMessageProps = {
    errorMessage: BaseError
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage }) => {
    return (
        <ErrorMessageWrapper className="message error from-ai">
            <div className="message-text">{errorMessage?.message}</div>
            <div className="message-footer flex justify-end items-center py-1">
                <span>{moment(new Date()).fromNow()}</span>
            </div>
        </ErrorMessageWrapper>
    );
};

export default Message;
