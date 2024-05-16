import { truncateText } from "@/styles/Mixins";
import styled from "styled-components";

export const SummaryCardWrapper = styled.div`
    padding: 10px 15px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.cards.background};
    height: 200px;
    position: relative;

    @media (1200px <= width) {
        height: 225px;
    }

    h1, h2, h3, h4 {
        font-size: 14px;
        font-weight: 600;
        ${truncateText(1)}

        @media (1200px <= width) {
            font-size: 16px;
        }

        &:first-of-type {
            width: 90%;
        }
    }

    p {
        margin-top: 5px;
        font-size: 12px;
        font-weight: 400;
        ${truncateText(6)}
        line-height: 1.6;

        &:not(:first-of-type) {
            display: none;
        }

        @media (1200px <= width) {
            font-size: 14px;
        }
    }

    strong {
        font-size: 12px;
    }

    .card-footer {
        border-top: 1px solid ${({ theme }) => theme.cards.border};
        position: absolute;
        bottom: 10px;
        left: 15px;
        width: calc(100% - 30px);
        padding-top: 5px;

        .read-more {
            color: ${({ theme }) => theme.cards.readMore};

            span:not(.material-symbols-outlined):hover {
                text-decoration: underline;
            }
        }

        a {
            text-decoration: none;
        }

        .delete {
            span:first-of-type {
                max-width: 0;
                overflow: hidden;
                transition: .3s ease;
            }

            @media (hover: hover) {
                &:hover {
                    span:first-of-type {
                        max-width: 35px;
                    }
                }
            }
        }
    }
`;
