import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const InputWrapper = styled.div`
    ${flex("unset", "unset", "column")}
    gap: 5px;

    input {
        border-radius: 8px;
        border: 2px solid ${({ theme }) => theme.inputs.border};
        outline: none;
        background-color: transparent;
        height: 40px;

        @media (1024px <= width) {
            height: 45px;
        }

        &:disabled {
            opacity: .5;
            cursor: not-allowed;
        }
    }

    span.error-msg {
        color: ${({ theme }) => theme.inputs.error};
    }
`;
