import { FC } from "react";
import { SignUpWrapper } from "./SignUp.styled";
import { FieldValues, useForm } from "react-hook-form";
import NotAuthLayout from "@/layouts/not-auth/NotAuth.layout";
import { Input } from "@components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterSchema } from "@/schemas/userSchema";
import { registerUser } from "@/services/authService";
import { useMutation } from "react-query";
import { newUser } from "@/services/authService.types";
import Button from "@/components/Button/Button";
import { toast } from "react-toastify";
import DefaultLoader from "@/components/Loaders/DefaultLoader";

const SignUp: FC = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(userRegisterSchema) });

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: (payload: newUser) => registerUser(payload)
    })

    const onSubmit = async (data: FieldValues) => {
        const validBody = userRegisterSchema.safeParse(data);
        if(!validBody.success) return
        const res = await mutateAsync(validBody.data)
        if (res.code === "error") toast(res.error.message, { type: "error" });
        if(res.code === 'success'){ 
            toast('User Registered Successfully', { type: 'success' })
            reset()
        }
    };
    
    return (
        <NotAuthLayout page="sign-up">
            <SignUpWrapper>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                    <Input
                        label="Name"
                        {...register("userName", { required: true })}
                        errorMessage={errors.userName && errors.userName.message?.toString()}
                    />
                    <Input
                        label="Email"
                        {...register("email", { required: true })}
                        errorMessage={errors.email && errors.email.message?.toString()}
                    />
                    <Input
                        label="Password"
                        type="password"
                        {...register("password", { required: true })}
                        errorMessage={errors.password && errors.password.message?.toString()}
                    />
                    <Button type="submit" disabled={isLoading} tailwindClass="flex items-center justify-center">
                        {isLoading ? <DefaultLoader /> : 'Sign Up'}
                    </Button>
                </form>
            </SignUpWrapper>
        </NotAuthLayout>
    );
};

export default SignUp;
