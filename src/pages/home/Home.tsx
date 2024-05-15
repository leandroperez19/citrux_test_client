import { FC, useEffect, useState } from "react";
import { HomeWrapper } from "./Home.styled";
import { Input } from "@/components/Input/Input";
import DefaultLayout from "@/layouts/default/Default.layout";
import { createSummarySchema } from "@/schemas/summarySchema";
import { useForm } from "react-hook-form";
import { Summaries, createSummaryPayload } from "@/services/summaryService.types";
import { createSummaryReq, getSummariesReq } from "@/services/summaryService";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button/Button";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import SummaryCard from "./components/SummaryCard/SummaryCard";
import NoSummaries from "./components/NoSummaries/NoSummaries";

interface SummaryFormValues {
    url: string;
}

const Home: FC = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SummaryFormValues>({ resolver: zodResolver(createSummarySchema) });

    const [summaries, setSummaries] = useState<Summaries['summaries'] | null>(null);

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: (payload: createSummaryPayload) => createSummaryReq(payload),
    });

    const { data: summariesRes, isLoading: summariesLoading, refetch } = useQuery({
        queryFn: getSummariesReq,
        queryKey: ['summaries'],
        refetchOnWindowFocus: false
    })

    const onSubmit = async (data: SummaryFormValues) => {
        const validBody = createSummarySchema.safeParse(data);
        if (!validBody.success) return;
        const res = await mutateAsync(validBody.data);
        if (res.code === "error") return toast(res.error.message, { type: "error" });
        toast('Article summarized successfully!', { type: 'success' })
        refetch();
        reset();
    };

    const getSummaries = () => {
        if(!summariesRes) return;
        if(summariesRes.code === 'error') return setSummaries([]);
        if(summariesRes.code === 'success') setSummaries(summariesRes.data.summaries);
    }

    useEffect(() => {
        getSummaries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [summariesRes])

    return (
        <DefaultLayout>
            <HomeWrapper>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
                    <Input
                        label="Please enter an article URL"
                        {...register("url", { required: true })}
                        errorMessage={
                            errors.url && errors.url.message?.toString()
                        }
                        disabled={isLoading || summariesLoading}
                    />
                    <div className="btn w-full flex justify-end">
                        <Button
                            type="submit"
                            color="primary"
                            disabled={isLoading}
                            tailwindClass="lg:max-w-60"
                        >
                            Summarize
                        </Button>
                    </div>
                </form>
                <div className="summaries-container mt-5">
                    {summaries && summaries.length > 0 ? (
                        <>
                            <h1 className="text-center font-semibold text-xl lg:text-2xl">
                                My Summaries
                            </h1>
                            <div className="cards grid gap-5 mt-5">
                                {summaries && summaries.map((sum, i) => (
                                    <SummaryCard
                                        content={sum.content}
                                        url={sum.url}
                                        id={sum._id}
                                        key={i}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <NoSummaries />
                    )}
                </div>
            </HomeWrapper>
        </DefaultLayout>
    );
};

export default Home;
