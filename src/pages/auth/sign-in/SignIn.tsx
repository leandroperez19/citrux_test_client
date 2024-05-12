import { FC } from "react";
import { SignInWrapper } from "./SignIn.styled";
import { useForm } from "react-hook-form";
import NotAuthLayout from "@/layouts/not-auth/NotAuth.layout";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@components/Input/Input";
import Button from "@components/Button/Button";
import { userSignInSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { signIn } from "@/services/authService";
import { signInCredentials } from "@/services/authService.types";
import { toast } from "react-toastify";
import { useUser } from "@/context/UserContext";

const SignIn: FC = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(userSignInSchema) });

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: (payload: signInCredentials) => signIn(payload),
    });

    const { setUser } = useUser()
    const navigate = useNavigate();

    const onSubmit = async (data: unknown) => {
        const validBody = userSignInSchema.safeParse(data);
        if (!validBody.success) return;
        const res = await mutateAsync(validBody.data);
        if (res.code === "error") toast(res.error.message, { type: "error" });
        if (res.code === "success") {
            toast("Signed In Successfully", { type: "success" });
            setUser(res.data.user);
            navigate('/')
            reset();
        }
    };

    return (
        <NotAuthLayout page="sign-in">
            <SignInWrapper>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                    <Input
                        type="email"
                        label="Email"
                        {...register("email", { required: true })}
                        errorMessage={
                            errors.email && errors.email.message?.toString()
                        }
                    />
                    <Input
                        type="password"
                        label="Password"
                        {...register("password", { required: true })}
                        errorMessage={
                            errors.password &&
                            errors.password.message?.toString()
                        }
                    />
                    <p className="forgot-password text-sm text-center">
                        Forgot Password?{" "}
                        <Link to={"/recover-password"} className="font-medium">
                            Recover
                        </Link>
                    </p>
                    <Button type="submit" disabled={isLoading}>Sign In</Button>
                </form>
            </SignInWrapper>
        </NotAuthLayout>
    );
};

export default SignIn;
