import { z } from "zod";

export const userRegisterSchema = z.object({
    userName: z
        .string({
            required_error: "Name is required",
        })
        .min(3, "Name must be at least 3 characters long")
        .trim(),
    email: z
        .string({
            required_error: "Email is required",
        })
        .email("Invalid email format"),
    password: z
        .string({
            required_error: "Password is required",
        })
        .min(8, "Password must be at least 8 characters long"),
});

export const userSignInSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
        })
        .email("Invalid email format"),
    password: z
        .string({
            required_error: "Password is required",
        })
        .min(8, "Password must be at least 8 characters long"),
});

export const requestOTPSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
        })
        .email("Invalid email format"),
});

export const updatePasswordSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
        })
        .email("Invalid email format"),
    otp: z
        .string({ required_error: "Code is required" })
        .min(6, "Code must be 6 characters long")
        .max(6, "Code must be 6 characters long")
        .toUpperCase(),
    newPassword: z
        .string({ required_error: "New password is required" })
        .min(8, "Password must be at least 8 characters long"),
});

export const userResponse = z.object({
    message: z.string(),
    user: z.object({
        id: z.string(),
        userName: z.string(),
        email: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
    }),
});
