import { z } from "zod"
import { userResponse } from "@/schemas/userSchema"

export interface newUser {
    userName: string,
    email: string,
    password: string
}

export interface signInCredentials {
    email: string,
    password: string
}

export interface otpRequestPayload {
    email: string
}

export interface newPassword {
    email: string,
    otp: string,
    newPassword: string
}

export type User = z.infer<typeof userResponse>
