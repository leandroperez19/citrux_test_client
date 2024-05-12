import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const UserDialogWrapper = styled.div`
    z-index: 30;
    position: absolute;
    min-width: 40%;
    max-width: 250px;
    top: 110%;
    right: 20px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.modal.shadow};

    .section {
        padding: 8px;
        ${flex('center', 'space-between')}
        font-size: 12px;

        &:not(:last-of-type) {
            border-bottom: 1px solid ${({ theme }) => theme.inputs.border};
        }
    }
`