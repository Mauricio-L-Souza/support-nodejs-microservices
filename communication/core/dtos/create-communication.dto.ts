import { z } from 'zod';

export const createCommunicationSchema = z.object({
    ticket_identifier: z.string().max(255),
    user_identifier: z.string().max(255),
    message: z.string().min(5).max(255)
});

export type CreateCommunicationDTO = z.infer<typeof createCommunicationSchema>; 