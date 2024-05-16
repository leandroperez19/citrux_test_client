import { FC } from "react";
import { SummaryCardWrapper } from "./SummaryCard.styled";
import { Link } from "react-router-dom";

type SummaryCardProps = {
    content: string;
    url: string,
    id: string,
    deleteSummary: (id: string) => void
};

const SummaryCard: FC<SummaryCardProps> = ({ content, url, id, deleteSummary }) => {
    return (
        <SummaryCardWrapper>
            <a className="full-art absolute top-2.5 right-3.5" href={url} target="_blank">
                <span className="material-symbols-outlined text-lg">open_in_new</span>
            </a>
            <div
                className="card-content"
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
            <div className="card-footer w-full flex justify-between items-center text-xs">
                <div className="delete flex gap-1 items-center text-red-400 cursor-pointer" onClick={() => deleteSummary(id)}>
                    <span>Delete</span>
                    <span className="material-symbols-outlined text-lg">delete</span>
                </div>
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