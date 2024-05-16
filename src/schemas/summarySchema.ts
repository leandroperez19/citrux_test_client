import { z } from "zod";

export const summaryResponseSchema = z.object({
    message: z.string(),
    summary: z.object({
        url: z.string(),
        content: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
    }),
});

export const createSummarySchema = z.object({
    url: z.string({ required_error: "URL is required" }).min(5).trim(),
});

export const summariesResponseSchema = z.object({
    code: z.string(),
    summaries: z.array(
        z.object({
            _id: z.string().min(5),
            url: z.string().min(5),
            content: z.string().min(8),
            userId: z.string(),
            createdAt: z.string(),
            updatedAt: z.string(),
            __v: z.number(),
        })
    ),
});

export const summaryByIdResponseSchema = z.object({
    code: z.string(),
    summary: z.object({
        _id: z.string().min(5),
        url: z.string().min(5),
        content: z.string().min(8),
        userId: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        __v: z.number(),
    }),
});
