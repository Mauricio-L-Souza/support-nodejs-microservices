import { z } from "zod";

export const paginateQuerySchema = z.object({
    page: z.string().optional()
        .transform(val => val ? Number(val) : 1)
        .pipe(z.number().positive()),
    perPage: z.string().optional()
        .transform(val => val ? Number(val) : 15)
        .pipe(z.number().positive().max(100))
});

export type PaginateQueryDTO = z.infer<typeof paginateQuerySchema>; 