import { FC } from "react";
import { SignUpWrapper } from "./SignUp.styled";
import { useForm } from "react-hook-form";
import NotAuthLayout from "@/layouts/not-auth/NotAuth.layout";

const SignUp: FC = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: unknown) => {
        console.log(data); // Log submitted form data
    };

    return (
        <NotAuthLayout page="sign-up">
            <SignUpWrapper>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                    <div className="username-input field">
                        <label>Name</label>
                        <input
                            type="text"
                            {...register("username", { required: true })}
                        />
                    </div>
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
                    <button type="submit">Sign Up</button>
                </form>
            </SignUpWrapper>
        </NotAuthLayout>
    );
};

export default SignUp;
