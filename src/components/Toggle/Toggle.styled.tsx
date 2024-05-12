import styled from "styled-components";



export const ToggleWrapper = styled.div`
    .toggle {
        border-radius: 15px;
        background-color: ${({ theme }) => theme.modal.secondaryText};
        width: 35px;
        height: 20px;
        padding: 2px 3px;

        .ball {
            height: 100%;
            width: 60%;
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
                    float: right;
                }
            }
        }

        &.inactive {
            .ball {
                animation: toggleInactive .3s ease forwards;
            }

            @keyframes toggleInactive {
                0% {
                    float: right;
                }
                100% {
                    float: left;
                }
            }
        }
    }
`