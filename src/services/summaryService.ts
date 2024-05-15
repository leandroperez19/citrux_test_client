import { summariesResponseSchema, summaryByIdResponseSchema, summaryResponseSchema } from "@/schemas/summarySchema"
import { doGet, doPost } from "./requestHandler"
import { Summaries, Summary, SummaryById, createSummaryPayload } from "./summaryService.types"

export const createSummaryReq = (payload: createSummaryPayload) => {
    return doPost<Summary>('/create-summary', { ...payload }, summaryResponseSchema.parse)
}

export const getSummariesReq = () => {
    return doGet<Summaries>('/get-summaries', summariesResponseSchema.parse)
}

export const getSummaryByIdReq = (id: string) => {
    return doGet<SummaryById>(`/get-summary/${id}`, summaryByIdResponseSchema.parse)
}