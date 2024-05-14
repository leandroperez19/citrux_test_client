import { summaryResponseSchema } from "@/schemas/summarySchema"
import { doPost } from "./requestHandler"
import { Summary, createSummaryPayload } from "./summaryService.types"

export const createSummaryReq = (payload: createSummaryPayload) => {
    return doPost<Summary>('/create-summary', { ...payload }, summaryResponseSchema.parse)
}