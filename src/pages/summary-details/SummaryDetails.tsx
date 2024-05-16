import { FC, useEffect, useState } from "react";
import { SummaryDetailsWrapper } from "./SummaryDetails.styled";
import DefaultLayout from "@/layouts/default/Default.layout";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSummaryByIdReq } from "@/services/summaryService";
import { SummaryById } from "@/services/summaryService.types";
import DefaultLoader from "@/components/Loaders/DefaultLoader";
import BackButton from "@/components/BackButton/BackButton";
import { Chat } from "./components/chat/Chat";

const SummaryDetails: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [summary, setSummary] = useState<SummaryById["summary"] | null>(null);

    const { data, isLoading } = useQuery({
        queryFn: () => getSummaryByIdReq(id ?? ""),
        queryKey: ['summary'],
        refetchOnWindowFocus: false,
    });

    const getSummary = () => {
        if (!data) return;
        if (data.code === "error") return navigate("/404");
        setSummary(data.data.summary);
    };

    useEffect(() => {
        if (summary) return;
        getSummary();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <DefaultLayout>
            <SummaryDetailsWrapper>
                {!summary || isLoading ? (
                    <div className="loader w-full flex items-center justify-center">
                        <DefaultLoader />
                    </div>
                ) : (
                    <div className="page-content lg:flex gap-10">
                        <div className="page-content-left lg:basis-2/4">
                            <div className="top flex justify-between items-center">
                                <BackButton />
                                <div className="full-article text-xs w-fit lg:text-sm">
                                    <a className="flex gap-1 items-center" href={summary.url} target="_blank">
                                        <span>Full article</span>
                                        <span className="material-symbols-outlined text-lg"> open_in_new</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="article mt-5"
                                dangerouslySetInnerHTML={{
                                    __html: summary.content,
                                }}
                            />
                        </div>
                        <div className="chat mt-10 lg:basis-2/4">
                            <Chat summary={summary}/>
                        </div>
                    </div>
                )}
            </SummaryDetailsWrapper>
        </DefaultLayout>
    );
};

export default SummaryDetails;
