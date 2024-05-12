import { flexCenter } from "@/styles/Mixins";
import styled from "styled-components";

export const NotAuthLayoutWrapper = styled.div`
    padding: 50px 20px;

    .logo, .message a {
        color: ${({ theme }) => theme.palette.text.highlights};
    }

    .message p {
        color: ${({ theme }) => theme.palette.text.tertiary};
    }

    span.or {
        ${flexCenter()}
        gap: 5px;
        color: ${({ theme }) => theme.palette.text.tertiary};

        &::after, &::before {
            width: 30%;
            height: 1px;
            content: '';
            background-color: ${({ theme }) => theme.palette.text.tertiary};
            display: inline-block;
            opacity: .5;
        }
    }

    @media (1024px <= width) {
        display: grid;
        grid-template-columns: 42% calc(58% - 45px);
        gap: 45px;
        border-radius: 8px;
        width: 90%;
        max-width: 1200px;
        margin: 2% auto;
        box-shadow: 0 0 8px ${({ theme }) => theme.palette.text.tertiary};
        padding: 40px;
        min-height: 90dvh;

        .top-left {
            align-self: center;
        }
        
        .bottom-right img {
            border-radius: 8px;
        }
    }
`