import styled from "styled-components";

export const ToggleWrapper = styled.div`
    .toggle {
        border-radius: 60px;
        background-color: ${({ theme }) => theme.modal.secondaryText};
        width: 35px;
        height: 20px;
        padding: 2px;

        .ball {
            height: 100%;
            width: 50%;
            border-radius: 50%;
            background-color:  ${({ theme }) => theme.palette.common.white};
        }

        &.active {
            background-color: ${({ theme }) => theme.palette.text.highlights};

            .ball {
                animation: toggleActive .3s ease forwards;
            }

            @keyframes toggleActive {
                100% {
                    transform: translateX(95%);
                }
            }
        }

        &.inactive {
            .ball {
                animation: toggleInactive .3s ease forwards;
            }

            @keyframes toggleInactive {
                0% {
                    transform: translateX(95%);
                }
                100% {
                    transform: translateX(5%);
                }
            }
        }
    }
`