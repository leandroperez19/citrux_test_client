import styled from "styled-components";

export const SignInWrapper = styled.div`
    margin-block: 10px;

    .forgot-password {
        color: ${({ theme }) => theme.palette.text.tertiary};

        a {
            color: ${({ theme }) => theme.palette.text.highlights};
        }
    }
`