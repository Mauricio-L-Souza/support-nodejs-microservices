import { z } from "zod";

export const CreateAnalystSchema = z.object({
    role: z.enum(['analista', 'supervisor']).default('analista')
});

export type CreateAnalystDTO = z.infer<typeof CreateAnalystSchema>; 