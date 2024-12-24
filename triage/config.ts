import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
    ANALYST_SERVICE_URL: z.string(),
    TICKET_SERVICE_URL: z.string(),
    AUTH_SERVICE_URL: z.string(),
});

export const env = envSchema.parse(process.env);

export const config = {
    services: {
        analyst: env.ANALYST_SERVICE_URL,
        ticket: env.TICKET_SERVICE_URL,
        auth: env.AUTH_SERVICE_URL,
    }
}