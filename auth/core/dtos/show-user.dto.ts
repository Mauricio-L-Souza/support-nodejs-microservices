import { z } from 'zod';

export const showUserSchema = z.object({
    userId: z.coerce.number()
}); 