import { z } from "zod";

export const refreshSchema = z.object({
    refreshToken: z.string()
});

export type RefreshDTO = z.infer<typeof refreshSchema>; 