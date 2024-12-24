import { Response, Request } from "express";

import { paginateQuerySchema } from "./dtos/paginate.dto";
import { CreateCommunicationCase } from "./cases/create-communication";
import { createCommunicationSchema } from "./dtos/create-communication.dto";
import { PaginateCommunicationsCase } from "./cases/paginate-communication";

const store = async (req: Request, res: Response) => {
    const payload = createCommunicationSchema.parse(req.body);
    const createCommunicationCase = new CreateCommunicationCase();
    const result = await createCommunicationCase.execute(payload, req.token);

    return res.status(201).json(result);
}

const index = async (req: Request, res: Response) => {
    const payload = paginateQuerySchema.parse(req.query);

    const paginateCommunicationsCase = new PaginateCommunicationsCase();
    const result = await paginateCommunicationsCase.execute(payload, req.params.ticketId);

    return res.json(result);
}

export default { store, index };