import Communication from '../models/Communication';
import { CreateCommunicationDTO } from '../dtos/create-communication.dto';
import ExternalServicesClient from '../clients/external-services.client';

export class CreateCommunicationCase {
    async execute(data: CreateCommunicationDTO, token: string) {
        this.verifyTicketExists(data.ticket_identifier, token);
        this.verifyUserExists(data.user_identifier, token);

        const communication = await Communication.query().create({
            ticket_identifier: data.ticket_identifier,
            user_identifier: data.user_identifier,
            message: data.message
        });

        return communication;
    }

    private async verifyTicketExists(ticket_identifier: string, token: string) {
        const client = new ExternalServicesClient();
        await client.verifyTicketExists(ticket_identifier, token);
    }

    private async verifyUserExists(user_identifier: string, token: string) {
        const client = new ExternalServicesClient();
        await client.verifyUserExists(user_identifier, token);
    }
}