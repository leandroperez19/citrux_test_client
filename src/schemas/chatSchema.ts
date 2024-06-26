import { z } from "zod";

export const messagesResponseSchema = z.object({
    code: z.string(),
    messages: z.array(z.object({
        _id: z.string().min(5),
        summaryId: z.string(),
        userId: z.string(),
        message: z.string(),
        from: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        __v: z.number(),
    }))
})

export const createMessageForm = z.object({
    question: z.string({ required_error: "Message is required" }).min(3, "Question must contain at least 3 characters")
})

export const createMessageBody = z.object({
    summaryId: z.string().min(6),
    question: z.string({ required_error: "Message is required" }).min(3)
})