import { PageContainer } from "@/styles/Mixins";
import styled from "styled-components";

export const HomeWrapper = styled.div`
    ${PageContainer()}

    .summaries-container {
        .cards {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
`