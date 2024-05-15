import styled from "styled-components";

export const ChatWrapper = styled.div`
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.inputs.border};
    padding: 10px;

    @media (1024px <= width) {
        padding: 20px;
    }

    .label {
        text-align: center;
        border-bottom: 1px solid ${({ theme }) => theme.inputs.border};
        padding-bottom: 5px;
    }

    .messages {
        height: 20rem;
        overflow-y: scroll;
        scroll-behavior: smooth;

        .message {
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

            &.error {
                border: 1px solid red;
            }

            .message-footer {
                font-size: 10px;
            }
        }

        .no-messages {
            color: ${({ theme }) => theme.palette.text.tertiary};
        }
    }
`