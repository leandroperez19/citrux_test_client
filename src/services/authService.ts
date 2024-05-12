import { userResponse } from "@/schemas/userSchema"
import { User, newPassword, newUser, otpRequestPayload, signInCredentials } from "./authService.types"
import { doPost, doPut } from "./requestHandler"
import { BaseError as BaseResponse, errorSchema as baseResponse } from "./requestHandler"

export const registerUser = (payload: newUser) => {
    return doPost<User>('/register', { ...payload }, userResponse.parse)
}

export const signIn = (payload: signInCredentials) => {
    return doPost<User>('/login', { ...payload }, userResponse.parse)
}

export const requestOTP = (payload: otpRequestPayload) => {
    return doPost<BaseResponse>('/request-otp', { ...payload }, baseResponse.parse)
}

export const updatePassword = (payload: newPassword) => {
    return doPut<User>('/update-user', { ...payload }, userResponse.parse)
}