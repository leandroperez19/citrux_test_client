import { createMessageResponseSchema } from "@/schemas/chatSchema"
import { doPost } from "./requestHandler"
import { NewMessages, createMessagePayload } from "./chatService.types"

export const createMessageReq = (payload: createMessagePayload) => {
    return doPost<NewMessages>('/ask-question', { ...payload }, createMessageResponseSchema.parse )
}