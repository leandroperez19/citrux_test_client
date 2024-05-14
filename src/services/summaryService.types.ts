import { summaryResponseSchema } from './../schemas/summarySchema';
import { z } from "zod";

export type Summary = z.infer<typeof summaryResponseSchema>

export interface createSummaryPayload {
    url: string,
    userId: string
}