import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
    JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);

export const config = {
    auth: {
        jwtSecret: env.JWT_SECRET,
    }
}