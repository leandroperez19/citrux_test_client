import styled from "styled-components";

export const ChatWrapper = styled.div`
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.inputs.border};
    padding: 10px;

    .messages {
        height: 20rem;
    }
`