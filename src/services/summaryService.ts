import { summariesResponseSchema, summaryResponseSchema } from "@/schemas/summarySchema"
import { doGet, doPost } from "./requestHandler"
import { Summaries, Summary, createSummaryPayload } from "./summaryService.types"

export const createSummaryReq = (payload: createSummaryPayload) => {
    return doPost<Summary>('/create-summary', { ...payload }, summaryResponseSchema.parse)
}

export const getSummariesReq = () => {
    return doGet<Summaries>('/get-summaries', summariesResponseSchema.parse)
}