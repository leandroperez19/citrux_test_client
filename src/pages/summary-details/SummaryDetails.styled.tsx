import { PageContainer } from "@/styles/Mixins";
import styled from "styled-components";

export const SummaryDetailsWrapper = styled.div`
    ${PageContainer()}

    .loader {
        height: 80dvh;
    }

    .page-content {
        .article {
            h1,
            h2,
            h3,
            h4,
            h5 {
                font-size: 24px;
                text-align: center;
                font-weight: 600;
                margin-bottom: 8px;
            }

            p {
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 5px;
            }
        }

        a:hover {
            text-decoration: none;

            span:not(.material-symbols-outlined) {
                text-decoration: underline;
            }
        }
    }

    .full-article {
        color: ${({ theme }) => theme.palette.text.fifth};
    }
`;
