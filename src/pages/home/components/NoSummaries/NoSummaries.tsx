import { FC } from "react"
import { NoSummariesWrapper } from "./NoSummaries.styled";

const NoSummaries: FC = () => {
  return (
    <NoSummariesWrapper>
        <span>Seems like you haven't create any summary yet, use the input above summarize an article.</span>
    </NoSummariesWrapper>
  )
}

export default NoSummaries;
