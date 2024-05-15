import { createMessageResponseSchema } from "@/schemas/chatSchema";
import { z } from "zod";

export type NewMessages = z.infer<typeof createMessageResponseSchema>

export interface createMessagePayload {
    summaryId: string,
    question: string
}