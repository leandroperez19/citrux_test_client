import { summariesResponseSchema, summaryByIdResponseSchema, summaryResponseSchema } from './../schemas/summarySchema';
import { z } from "zod";

export type Summary = z.infer<typeof summaryResponseSchema>

export type Summaries = z.infer<typeof summariesResponseSchema>

export type SummaryById = z.infer<typeof summaryByIdResponseSchema>

export interface createSummaryPayload {
    url: string
}
