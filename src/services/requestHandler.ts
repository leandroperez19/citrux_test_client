import axios, { AxiosResponse } from "axios";
import { z } from "zod";
import { getEnvs } from "@/utils/getEnvs";

const errorSchema = z.object({
    code: z.string().min(1),
    message: z.string().min(1),
});

type BaseError = z.infer<typeof errorSchema>;

type ErrorResponse<E = BaseError> = {
    code: "error";
    error: E;
};

type SuccessResponse<T = unknown> = {
    code: "success";
    data: T;
};

type RequestCallback = () => Promise<AxiosResponse>;
type RequestParseCallback<T = unknown> = (e: unknown) => T
type RequestReturn<T = unknown> = Promise<SuccessResponse<T> | ErrorResponse>;

const doRequest = async <T>(request: RequestCallback, parser: RequestParseCallback<T>): RequestReturn<T> => {
  try {
    const response = await request();
    const parsed = parser(response.data)

    return { code: "success", data: parsed };
  } catch (error: unknown) {
    let code = "unknown_error";
    let message = "An error has occurred!";

    if(axios.isAxiosError(error)) {
        const isValidError = errorSchema.safeParse(error.response?.data);
    
        if (isValidError.success) {
            code = isValidError.data.code;
            message = isValidError.data.message;
        }
    }

    return {
      code: "error",
      error: { code, message },
    };
  }
};

const setBaseUrl = (path: string) => {
  const baseUrl = getEnvs()?.BACKEND_BASE_URL;
  return `${baseUrl}${path}`;
};

export const doGet = async <T>(path: string, parser: RequestParseCallback<T>) => {
  return doRequest(() => axios.get(setBaseUrl(path)), parser);
};

export const doPost = async <T>(path: string, body: Record<string, unknown>, parser: RequestParseCallback<T>) => {
  return doRequest(() => axios.post(setBaseUrl(path), body), parser);
};

export const doPut = async <T>(path: string, body: Record<string, unknown>, parser: RequestParseCallback<T>) => {
  return doRequest(() => axios.put(setBaseUrl(path), body), parser);
};

export const doPatch = async <T>(path: string, body: Record<string, unknown>, parser: RequestParseCallback<T>) => {
  return doRequest(() => axios.patch(setBaseUrl(path), body), parser);
};

export const doDelete = async <T>(path: string, parser: RequestParseCallback<T>) => {
  return doRequest(() => axios.delete(setBaseUrl(path)), parser);
};