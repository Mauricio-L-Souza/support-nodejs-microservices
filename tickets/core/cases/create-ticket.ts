import { CreateTicketDTO } from '../dtos/create-ticket.dto';
import Ticket from '../models/Ticket';

export class CreateTicketCase {
    async execute(data: CreateTicketDTO) {
        const ticket = await Ticket.query().create({
            title: data.title,
            description: data.description,
            status: data.status
        });
        
        return ticket;
    }
}
