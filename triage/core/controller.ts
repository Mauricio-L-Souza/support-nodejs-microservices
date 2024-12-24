import { z } from "zod";
import { Response, Request } from "express";

import Triage from './models/Triage';
import { AppError } from './errors/app.error';
import { CreateTriageCase } from './cases/create-triage';
import { createTriageSchema } from './dtos/create-triage.dto';
import { CreateCategoryCase } from './cases/create-category';
import { createCategorySchema } from './dtos/create-category.dto';

const makeTriage = async (req: Request, res: Response) => {
    const data = createTriageSchema.parse(req.body);

    const createTriageCase = new CreateTriageCase();
    const triage = await createTriageCase.execute(data, req.token);

    return res.status(201).json(triage);
}

const show = async (req: Request, res: Response) => {
    const { id } = req.params;
    const triage = await Triage.query().find(id);

    if (!triage) {
        throw new AppError('Triagem não encontrada', 404);
    }

    return res.json(triage);
}

const createCategory = async (req: Request, res: Response) => {
    const data = createCategorySchema.parse(req.body);

    const createCategoryCase = new CreateCategoryCase();
    const category = await createCategoryCase.execute(data);

    return res.status(201).json(category);
}

export default { makeTriage, show, createCategory };
