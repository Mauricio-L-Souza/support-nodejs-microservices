import Triage from '../models/Triage';
import { AppError } from '../errors/app.error';
import { CreateTriageDTO } from '../dtos/create-triage.dto';
import { ExternalServicesClient } from '../clients/external-services.client';
import Category from '../models/Category';

export class CreateTriageCase {
    private externalServicesClient: ExternalServicesClient;

    constructor() {
        this.externalServicesClient = new ExternalServicesClient();
    }

    async execute(data: CreateTriageDTO, token: string) {
        if (!await this.analystHasPermission(data.analystId, token)) {
            throw new AppError('Analista não tem permissão para criar triagem', 403);
        }

        if (!await this.ticketExists(data.ticketId, token)) {
            throw new AppError('Ticket não encontrado', 404);
        }

        const category = await Category.query().find(data.categoryId);

        if (!category) {
            throw new AppError('Categoria não encontrada', 404);
        }

        const triage = await Triage.query().create({
            ticket_identifier: data.ticketId,
            priority: data.priority,
            category_id: data.categoryId,
        });

        return triage;
    }

    async analystHasPermission(analystID: string, token: string){
        return await this.externalServicesClient.verifyAnalystPermission(analystID, token);
    }

    async ticketExists(ticketId: string, token: string){
        return await this.externalServicesClient.verifyTicketExists(ticketId, token);
    }
} 