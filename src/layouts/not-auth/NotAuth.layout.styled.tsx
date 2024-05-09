import { flex, flexCenter } from "@/styles/Mixins";
import styled from "styled-components";

export const NotAuthLayoutWrapper = styled.div`
    padding: 50px 20px;

    .logo, .message a {
        color: ${({ theme }) => theme.palette.text.highlights};
    }

    .message p {
        color: ${({ theme }) => theme.palette.text.tertiary};
    }

    
    .field {
        ${flex('unset', 'unset', 'column')}
        gap: 5px;

        input {
            width: 100%;
            padding: 10px;
            height: 40px;
            border-radius: 8px;
            border: 2px solid ${({ theme }) => theme.inputs.border};
            outline: none;
            background-color: transparent;
        }

        label {
            font-size: 12px;
            font-weight: 500;
        }
    }

    button {
        height: 40px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.buttons.primary.background};
        font-size: 14px;
        color: ${({ theme }) => theme.palette.common.white};

        &:hover {
            background-color: ${({ theme }) => theme.buttons.primary.hoverBackground};
        }
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

    .extra-auth-options button {
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.inputs.border};
        color: ${({ theme }) => theme.palette.text.primary};

        &:hover {
            background-color: ${({ theme }) => theme.buttons.tertiary.hoverBackground};
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

        
        button, .field input {
            height: 45px; 
        }
    }
`