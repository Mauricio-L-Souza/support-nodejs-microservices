import { Response, Request } from "express";

import Ticket from "./models/Ticket";
import { paginateQuerySchema } from "./dtos/paginate.dto";
import { createTicketSchema } from "./dtos/create-ticket.dto";
import { CreateTicketCase } from "./cases/create-ticket";
import { PaginateTicketsCase } from "./cases/paginate-tickets";

const store = async (req: Request, res: Response) => {
    const validatedData = createTicketSchema.parse(req.body);
    const createTicketCase = new CreateTicketCase();
    const result = await createTicketCase.execute(validatedData);

    return res.status(201).json(result);
}

const index = async (req: Request, res: Response) => {
    const { page, perPage } = paginateQuerySchema.parse(req.query);

    const paginateTicketsCase = new PaginateTicketsCase();
    const result = await paginateTicketsCase.execute({ page, perPage });

    return res.json(result);
}

const show = async (req: Request, res: Response) => {
    const { id } = req.params;
    const ticket = await Ticket.query().find(id);

    if (!ticket) {
        return res.status(404).json({ message: 'Ticket não encontrado' });
    }

    return res.json(ticket);
};

export default { store, index, show };