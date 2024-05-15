import { FC } from "react";
import { HomeWrapper } from "./Home.styled";
import { Input } from "@/components/Input/Input";
import DefaultLayout from "@/layouts/default/Default.layout";
import { createSummarySchema, summaryURLSchema } from "@/schemas/summarySchema";
import { useForm } from "react-hook-form";
import { createSummaryPayload } from "@/services/summaryService.types";
import { createSummaryReq } from "@/services/summaryService";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button/Button";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
// import { summaries } from "./mock";
// import SummaryCard from "./components/SummaryCard/SummaryCard";
// import NoSummaries from "./components/NoSummaries/NoSummaries";

interface SummaryFormValues {
    url: string;
}

const Home: FC = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SummaryFormValues>({ resolver: zodResolver(summaryURLSchema) });

    // const [summaries, setSummaries] = useState<any>()

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: (payload: createSummaryPayload) =>
            createSummaryReq(payload),
    });

    const onSubmit = async (data: SummaryFormValues) => {
        const body = { url: data.url };
        const validBody = createSummarySchema.safeParse(body);
        if (!validBody.success) return;
        const res = await mutateAsync(validBody.data);
        if (res.code === "error") return toast(res.error.message, { type: "error" });
        console.log(res)
        reset();
    };

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
                        disabled={isLoading}
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
                    {/* {summaries && summaries.length > 0 ? (
                        <>
                            <h1 className="text-center font-semibold text-xl lg:text-2xl">
                                My Summaries
                            </h1>
                            <div className="cards grid gap-5 mt-5">
                                {summaries && summaries.map((sum: any, i) => (
                                    <SummaryCard
                                        content={''}
                                        key={i}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <NoSummaries />
                    )} */}
                </div>
            </HomeWrapper>
        </DefaultLayout>
    );
};

export default Home;
