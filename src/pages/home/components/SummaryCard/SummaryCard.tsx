import { FC } from "react";
import { SummaryCardWrapper } from "./SummaryCard.styled";
import { Link } from "react-router-dom";

type SummaryCardProps = {
    content: string;
    url: string,
    id: string
};

const SummaryCard: FC<SummaryCardProps> = ({ content, url, id }) => {
    return (
        <SummaryCardWrapper>
            <div
                className="card-content"
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
            <div className="card-footer w-full flex justify-between items-center text-xs">
                <a className="flex gap-1 items-center" href={url} target="_blank">
                    <span>Full article</span>
                    <span className="material-symbols-outlined text-lg">
                        open_in_new
                    </span>
                </a>
                <Link className="read-more flex gap-1 items-center" to={`/summary/${id}`}>
                    <span>More details</span>
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </Link>
            </div>
        </SummaryCardWrapper>
    );
};

export default SummaryCard;