import { flex } from "@/styles/Mixins";
import styled from "styled-components";

export const BackButtonWrapper = styled.div`
    a {
        ${flex("center")};
        gap: 5px;
        font-size: 14px;
        color: ${({ theme }) => theme.palette.text.highlights};
        text-decoration: none;

        &:hover {
            text-decoration: none;

            span:last-child {
                text-decoration: underline;
            }
        }
    }
`;
