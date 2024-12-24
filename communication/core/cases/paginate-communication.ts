import { PaginateQueryDTO } from "../dtos/paginate.dto";
import Communication from "../models/Communication";

export class PaginateCommunicationsCase {
    async execute(data: PaginateQueryDTO, ticketId: string) {
        const communications = await Communication.query()
            .where('ticket_identifier', ticketId)
            .orderBy('created_at', 'desc')
            .paginate({
                page: data.page,
                perPage: data.perPage
            });

        return communications;
    }
} 