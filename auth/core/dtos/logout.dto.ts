import { z } from "zod";

export const logoutSchema = z.object({
    token: z.string()
});

export type LogoutDTO = z.infer<typeof logoutSchema>; 