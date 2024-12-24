import { z } from 'zod';

export const createTicketSchema = z.object({
    title: z.string().min(3).max(255),
    description: z.string().min(5),
    status: z.enum(['aberto', 'em_andamento', 'fechado']).default('aberto')
});

export type CreateTicketDTO = z.infer<typeof createTicketSchema>; 