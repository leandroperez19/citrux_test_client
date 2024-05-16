import { summariesResponseSchema, summaryByIdResponseSchema, summaryResponseSchema } from "@/schemas/summarySchema"
import { doDelete, doGet, doPost } from "./requestHandler"
import { Summaries, Summary, SummaryById, createSummaryPayload } from "./summaryService.types"
import { BaseError as BaseResponse, errorSchema as baseResponse } from "./requestHandler"

export const createSummaryReq = (payload: createSummaryPayload) => {
    return doPost<Summary>('/create-summary', { ...payload }, summaryResponseSchema.parse)
}

export const getSummariesReq = () => {
    return doGet<Summaries>('/get-summaries', summariesResponseSchema.parse)
}

export const getSummaryByIdReq = (id: string) => {
    return doGet<SummaryById>(`/get-summary/${id}`, summaryByIdResponseSchema.parse)
}

export const deleteSummaryReq = (id: string) => {
    return doDelete<BaseResponse>(`/delete-summary/${id}`, baseResponse.parse)
}