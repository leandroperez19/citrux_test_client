import { flex, square, truncateText } from "@/styles/Mixins";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    padding-inline: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.inputs.border};
    height: 70px;
    z-index: 50;
    position: relative;

    .navbar-content {
        position: relative;
        ${flex('center', 'space-between')}

        .left {
            .logo {
                img {
                    ${square('35px')}

                    @media (1024px <= width) {
                        width: 150px;
                        height: auto;
                    }
                }

                span.name {
                    color: ${({ theme }) => theme.palette.text.highlights};
                    padding-right: 20px;
                    height: 100%;
                }
            }
        }

        .right .user-dialog-toggle {
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.inputs.caret};
            }
            
            span {
                ${truncateText(1)}
            }

            .username {
                color: ${({ theme }) => theme.palette.text.primary};
            }

            .arrow-down {
                transition: all .3s ease;
            }
        }
    }

`