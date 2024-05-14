import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const UserDialogWrapper = styled.div`
    position: absolute;
    width: 40%;
    max-width: 200px;
    top: 110%;
    right: 0;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.dialog.background};
    animation: dialogGrow 0.3s ease forwards;
    max-height: 0;
    overflow: hidden;

    @keyframes dialogGrow {
        100% {
            max-height: 78px;
        }
    }

    .user-dialog-section {
        padding: 8px;
        ${flex("center", "space-between")}
        font-size: 12px;
        cursor: pointer;

        &:not(:last-of-type) {
            border-bottom: 1px solid ${({ theme }) => theme.inputs.border};
        }

        @media (1024px <= width) {
            font-size: 14px;
        }

        
        &:hover {
            background-color: ${({ theme }) => theme.dialog.hover};
        }
    }

    &.closing {
        animation: dialogShrink 0.3s ease forwards;

        @keyframes dialogShrink {
            0% {
                max-height: 78px;
            }
            100% {
                max-height: 0;
            }
        }
    }
`;
