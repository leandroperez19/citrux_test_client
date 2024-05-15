import styled from "styled-components";

export const MessageWrapper = styled.div`
    font-size: 12px;
    margin-bottom: 5px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.inputs.border};
    border-radius: 8px;

    &.from-ai {
        margin-right: 20%;
    }

    &.from-you {
        margin-left: 20%;
    }

    .message-footer {
        font-size: 10px;
    }
`;

export const ErrorMessageWrapper = styled.div`
    font-size: 12px;
    margin-bottom: 5px;
    padding: 10px;
    border: 1px solid red;
    border-radius: 8px;
    margin-right: 20%;

    .message-footer {
        font-size: 10px;
    }
`