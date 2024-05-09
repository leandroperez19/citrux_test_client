import { z } from "zod";
import dotenv from 'dotenv'

dotenv.config()

export const envSchema = z.object({
    BACKEND_BASE_URL: z.string().min(1),
});

export const getEnvs = () => envSchema.safeParse(process.env)?.data;