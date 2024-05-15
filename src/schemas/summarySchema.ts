import { string, z } from "zod";

export const summaryResponseSchema = z.object({
    message: string(),
    summary: z.object({
        url: z.string(),
        content: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
    }),
});

export const summaryURLSchema = z.object({
    url: z.string({ required_error: "URL is required" }).min(5),
});

export const createSummarySchema = z.object({
    url: z.string({ required_error: "URL is required" }).min(5)
})
