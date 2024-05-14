import { FC } from "react";
import { HomeWrapper } from "./Home.styled";
import { Input } from "@/components/Input/Input";
import DefaultLayout from "@/layouts/default/Default.layout";
import { createSummarySchema, summaryURLSchema } from "@/schemas/summarySchema";
import { useForm } from "react-hook-form";
import { useUser } from "@/hooks/useUser";
import { createSummaryPayload } from "@/services/summaryService.types";
import { createSummaryReq } from "@/services/summaryService";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button/Button";
import { toast } from "react-toastify";
import { useMutation } from "react-query";

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

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: (payload: createSummaryPayload) =>
            createSummaryReq(payload),
    });

    const { user } = useUser();

    const onSubmit = async (data: SummaryFormValues) => {
        const body = { url: data.url, userId: user?.id };
        const validBody = createSummarySchema.safeParse(body);
        if (!validBody.success) return;
        const res = await mutateAsync(validBody.data);
        if(res.code === 'error') return toast(res.error.message, { type: "error" })
        console.log(res.data)
        reset()
    }

    return (
        <DefaultLayout>
            <HomeWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Please enter an article URL"
                        {...register("url", { required: true })}
                        errorMessage={
                            errors.url && errors.url.message?.toString()
                        }
                        disabled={isLoading}
                    />
                    <div className="btn">
                        <Button type="submit" color="primary" disabled={isLoading}>Summarize</Button>
                    </div>
                </form>
            </HomeWrapper>
        </DefaultLayout>
    );
};

export default Home;
