import { flexCenter } from "@/styles/Mixins";
import styled from "styled-components";

export const NoSummariesWrapper = styled.div`
    border-radius: 8px;
    opacity: .75;
    border: 3px solid ${({ theme }) => theme.inputs.border};
    min-height: 250px;
    ${flexCenter()};
    padding: 20px;
    text-align: center;

    span {
        color: ${({ theme }) => theme.cards.color};
    }
`