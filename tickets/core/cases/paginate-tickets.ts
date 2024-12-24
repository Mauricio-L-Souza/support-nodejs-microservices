import { PaginateQueryDTO } from "../dtos/paginate.dto";
import Ticket from "../models/Ticket";

export class PaginateTicketsCase {
    async execute(data: PaginateQueryDTO) {
        
        return await Ticket.query()
            .paginate({
                page: data.page,
                perPage: data.perPage
            });
    }
} 