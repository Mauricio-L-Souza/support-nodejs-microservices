import axios from 'axios';
import { config } from '../../config';

export class ExternalServicesClient {
    private readonly baseAnalystUrl: string;
    private readonly baseTicketUrl: string;

    constructor() {
        this.baseAnalystUrl = config.services.analyst;
        this.baseTicketUrl = config.services.ticket;
    }

    async verifyAnalystPermission(analystId: string, token: string): Promise<any> {

        const response = await axios.get(`${this.baseAnalystUrl}/analysts/${analystId}/check-permission`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.canTriage || false;
    }

    async verifyTicketExists(ticketId: string, token: string): Promise<any> {

        const response = await axios.get(`${this.baseTicketUrl}/tickets/${ticketId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return !!response.data;
    }
} 