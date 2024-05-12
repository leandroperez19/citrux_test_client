import { z } from "zod";

export const envSchema = z.object({
    BACKEND_BASE_URL: z.string().min(1),
});

export const getEnvs = () => envSchema.safeParse(import.meta.env)?.data;