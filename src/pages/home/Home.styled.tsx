import styled from "styled-components";

export const HomeWrapper = styled.div`
    padding: 100px 20px 30px;
    margin-inline: auto;
    max-width: 540px;

    @media (768px <= width) {
        max-width: 720px;
    }

    @media (1024px <= width) {
        max-width: 1080px;
    }

    @media (1400px <= width) {
        max-width: 1200px;
    }

    .summaries-container {
        .cards {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
`