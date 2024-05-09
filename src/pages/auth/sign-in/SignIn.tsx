import { FC } from "react";
import { SignInWrapper } from "./SignIn.styled";
import { useForm } from "react-hook-form";
import NotAuthLayout from "@/layouts/not-auth/NotAuth.layout";
import { Link } from "react-router-dom";

const SignIn: FC = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: unknown) => {
        console.log(data); // Log submitted form data
    };

    return (
        <NotAuthLayout page="sign-in">
            <SignInWrapper>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                    <div className="email-input field">
                        <label>Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="password-input field">
                        <label>Password</label>
                        <div className="input">
                            <input
                                type="password"
                                {...register("password", { required: true })}
                            />
                        </div>
                    </div>
					<p className="forgot-password text-sm text-center">
						Forgot Password? <Link to={'#'} className="font-medium">Recover</Link>
					</p>
                    <button type="submit">Sign In</button>
                </form>
            </SignInWrapper>
        </NotAuthLayout>
    );
};

export default SignIn;
