import { z } from 'zod';

export const createCategorySchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().min(10).max(255).optional(),
    priority: z.enum(['low', 'medium', 'high']).default('low')
});

export type CreateCategoryDTO = z.infer<typeof createCategorySchema>; 