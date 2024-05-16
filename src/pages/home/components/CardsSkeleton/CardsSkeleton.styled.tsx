import styled from "styled-components";

export const CardsSkeletonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;

    .skeleton-card {
        padding: 10px 15px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.cards.background};
        height: 200px;
        position: relative;
        animation: skeletonBackground 2s ease-in-out infinite;

        @keyframes skeletonBackground {
            0% { 
                opacity: 1;
            }
            50% {
                opacity: .3;
            }
            100% {
                opacity: 1;
            }
        }

        @media (1200px <= width) {
            height: 225px;
        }

        .title, .line {
            height: 12px;
            border-radius: 8px;
            background-color: #0003;
        }

        .card-footer {
            border-top: 1px solid ${({ theme }) => theme.cards.border};
            position: absolute;
            bottom: 10px;
            left: 15px;
            width: calc(100% - 30px);
            padding-top: 5px;
            pointer-events: none;
            opacity: .3;

            .read-more {
                color: ${({ theme }) => theme.cards.readMore};
            }
        }
    }
`;
