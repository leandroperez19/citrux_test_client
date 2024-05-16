import { messagesResponseSchema } from "@/schemas/chatSchema"
import { doGet, doPost } from "./requestHandler"
import { Messages, createMessagePayload } from "./chatService.types"
import { BaseError as BaseResponse, errorSchema as baseResponse } from "./requestHandler"


export const createMessageReq = (payload: createMessagePayload) => {
    return doPost<BaseResponse>('/ask-question', { ...payload }, baseResponse.parse )
}

export const getMessagesReq = (summary: string) => {
    return doGet<Messages>(`/get-messages/${summary}`, messagesResponseSchema.parse)
}