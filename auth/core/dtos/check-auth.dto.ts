import { z } from "zod";

export const checkAuthSchema = z.object({
    token: z.string()
});

export type CheckAuthDTO = z.infer<typeof checkAuthSchema>; 