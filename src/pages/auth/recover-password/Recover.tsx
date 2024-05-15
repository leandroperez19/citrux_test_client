import NotAuthLayout from "@/layouts/not-auth/NotAuth.layout";
import { FC, useState, ChangeEvent } from "react";
import { RecoverWrapper } from "./Recover.styled";
import { Input } from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestOTPSchema, updatePasswordSchema } from "@/schemas/userSchema";
import { inputToUpperCase } from "@/utils/upperCaseInput";
import { useMutation } from "react-query";
import { requestOTP, updatePassword } from "@/services/authService";
import { toast } from "react-toastify";
import { newPassword, otpRequestPayload } from "@/services/authService.types";
import { useNavigate } from "react-router-dom";

const Recover: FC = () => {
    const [OTPRequested, setOTPRequested] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(
            !OTPRequested ? requestOTPSchema : updatePasswordSchema
        ),
    });

    const navigate = useNavigate();

    const { mutateAsync: otpRes, isLoading: requestingOTP } = useMutation(
        {mutationFn: (payload: otpRequestPayload) => requestOTP(payload)}
    )

    const { mutateAsync: changePass, isLoading: changingPass } = useMutation({
        mutationFn: (payload: newPassword) => updatePassword(payload)
    })

    const onSubmit = async (data: unknown) => {
        if(!OTPRequested) await OTPReq(data);
        if(OTPRequested) {
            const res = await updatePass(data);
            if(res?.code === 'error') return;
            reset()
        }
    };

    const OTPReq = async (email: unknown) => {
        const validBody = requestOTPSchema.parse(email)
        if(!validBody) return;
        const res = await otpRes(validBody);
        if(res.code === 'error') toast(res.error.message, { type: "error" })
        if(res.code === 'success') {
            toast(res.data.message, { type: 'success' })
            setOTPRequested(true);
        }
    }

    const updatePass = async (data: unknown) => {
        const validBody = updatePasswordSchema.parse(data);
        if(!validBody) return;
        const res = await changePass(validBody);
        if(res.code === 'error') toast(res.error.message, { type: "error" });
        if(res.code === 'success') {
            toast('Password updated successfully', { type: 'success' });
            navigate('/sign-in')
        }
        return res;
    }

    return (
        <NotAuthLayout page="recover">
            <RecoverWrapper>
                <form
                    className="grid gap-5 min-h-60"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <Input
                        label="Email"
                        disabled={OTPRequested || requestingOTP}
                        type="email"
                        {...register("email", { required: true })}
                        errorMessage={
                            errors.email && errors.email.message?.toString()
                        }
                    />
                    {OTPRequested && (
                        <>
                            <Input
                                label="Code"
                                {...register("otp", { required: true })}
                                errorMessage={
                                    errors.otp && errors.otp.message?.toString()
                                }
                                onChange={(e: ChangeEvent<HTMLInputElement>) => inputToUpperCase(e)}
                            />
                            <Input
                                label="New Password"
                                type="password"
                                {...register("newPassword", { required: true })}
                                errorMessage={
                                    errors.newPassword &&
                                    errors.newPassword.message?.toString()
                                }
                            />
                        </>
                    )}
                    <Button type="submit" disabled={requestingOTP || changingPass}>Next</Button>
                </form>
            </RecoverWrapper>
        </NotAuthLayout>
    );
};

export default Recover;
