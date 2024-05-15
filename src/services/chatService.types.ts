import { messagesResponseSchema } from "@/schemas/chatSchema";
import { z } from "zod";

export type Messages = z.infer<typeof messagesResponseSchema>

// export type AllMessages = z.infer<typeof getMessagesResponseSchema>

export interface createMessagePayload {
    summaryId: string,
    question: string
}