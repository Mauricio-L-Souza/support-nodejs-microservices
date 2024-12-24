import { z } from "zod";

export const checkUserPermissionSchema = z.object({
    userId: z.string(),
    permission: z.string()
});

export type CheckUserPermissionDTO = z.infer<typeof checkUserPermissionSchema>; 