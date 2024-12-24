import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
    AUTH_BASE_URL: z.string(),
});

export const env = envSchema.parse(process.env);

export const config = {
    auth: {
        baseUrl: env.AUTH_BASE_URL,
    }
}
