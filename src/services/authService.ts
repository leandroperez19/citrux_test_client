import { userResponse } from "@/schemas/userSchema"
import { User, newPassword, newUser, otpRequestPayload, signInCredentials } from "./authService.types"
import { doGet, doPost, doPut } from "./requestHandler"
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

export const getProfile = () => {
    return doGet<User>('/get-profile', userResponse.parse)
}

export const verifyTokenReq = () => {
    return doGet<User>('/verify', userResponse.parse);
}

export const logoutReq = () => {
    return doPost<BaseResponse>('/logout', {}, baseResponse.parse);
}