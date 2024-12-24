import { Response, Request } from "express";

import { paginateQuerySchema } from "./dtos/paginate.dto";
import { CreateAnalystSchema } from "./dtos/create-analyst.dto";
import { CreateAnalystCase } from "./cases/create-analyst";
import { PaginateAnalystsCase } from "./cases/paginate-analysts";
import { checkAnalystPermissionSchema } from "./dtos/check-analyst-permission.dto";
import { CheckAnalystPermissionCase } from "./cases/check-analyst-permission";

const store = async (req: Request, res: Response) => {
    const validatedData = CreateAnalystSchema.parse(req.body);
    const createAnalystCase = new CreateAnalystCase();
    const result = await createAnalystCase.execute(validatedData);

    return res.status(201).json(result);
}

const index = async (req: Request, res: Response) => {
    const { page, perPage } = paginateQuerySchema.parse(req.query);

    const paginateAnalystsCase = new PaginateAnalystsCase();
    const result = await paginateAnalystsCase.execute({ page, perPage });

    return res.json(result);
}

const checkPermission = async (req: Request, res: Response) => {
    const { analystId } = checkAnalystPermissionSchema.parse(req.params);

    const checkPermissionCase = new CheckAnalystPermissionCase();
    const result = await checkPermissionCase.execute({ analystId });

    return res.json(result);
}

export default { store, index, checkPermission };