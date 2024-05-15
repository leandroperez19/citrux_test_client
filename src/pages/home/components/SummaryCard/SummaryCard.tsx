import { FC } from "react";
import { SummaryCardWrapper } from "./SummaryCard.styled";

type SummaryCardProps = {
    content: string;
};

const SummaryCard: FC<SummaryCardProps> = ({ content }) => {
    return (
        <SummaryCardWrapper>
            <div
                className="card-content"
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
            <div className="card-footer w-full flex justify-between items-center text-xs">
                <div className="flex gap-1 items-center">
                    <span>Full article</span>
                    <span className="material-symbols-outlined text-lg">
                        open_in_new
                    </span>
                </div>
                <div className="read-more flex gap-1 items-center">
                    <span>Read more</span>
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </div>
            </div>
        </SummaryCardWrapper>
    );
};

export default SummaryCard;