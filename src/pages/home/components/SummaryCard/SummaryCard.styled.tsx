import { truncateText } from "@/styles/Mixins";
import styled from "styled-components";

export const SummaryCardWrapper = styled.div`
    padding: 10px 15px;
    border-radius: 8px;
    box-shadow: 0 0 5px ${({ theme }) => theme.cards.border};
    height: 190px;
    position: relative;

    @media (1200px <= width) {
        height: 210px;
    }

    h2 {
        font-size: 14px;
        font-weight: 600;
        ${truncateText(2)}

        @media (1200px <= width) {
            font-size: 16px;
        }
    }

    p {
        margin-top: 5px;
        font-size: 12px;
        font-weight: 400;
        ${truncateText(5)}

        @media (1200px <= width) {
            font-size: 14px;
        }
    }

    .card-footer {
        border-top: 1px solid ${({ theme }) => theme.cards.border};
        position: absolute;
        bottom: 10px;
        left: 15px;
        width: calc(100% - 30px);
        padding-top: 5px;

        span {
            cursor: pointer;
        }

        .read-more {
            color: ${({ theme }) => theme.cards.readMore};
        }

        span:not(.material-symbols-outlined):hover {
            text-decoration: underline;
        }
    }
`;
