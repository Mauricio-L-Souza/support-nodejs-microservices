import { z } from "zod";

export const checkAnalystPermissionSchema = z.object({
    analystId: z.string()
});

export type CheckAnalystPermissionDTO = z.infer<typeof checkAnalystPermissionSchema>; 