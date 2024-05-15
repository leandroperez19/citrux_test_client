import { messagesResponseSchema } from "@/schemas/chatSchema"
import { doGet, doPost } from "./requestHandler"
import { Messages, createMessagePayload } from "./chatService.types"

export const createMessageReq = (payload: createMessagePayload) => {
    return doPost<Messages>('/ask-question', { ...payload }, messagesResponseSchema.parse )
}

export const getMessagesReq = (summary: string) => {
    return doGet<Messages>(`/get-messages/${summary}`, messagesResponseSchema.parse)
}