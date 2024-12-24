import { z } from 'zod';

export const createTriageSchema = z.object({
    ticketId: z.string(),
    analystId: z.string(),
    categoryId: z.string(),
    priority: z.enum(['low', 'medium', 'high']).default('low')
});

export type CreateTriageDTO = z.infer<typeof createTriageSchema>; 