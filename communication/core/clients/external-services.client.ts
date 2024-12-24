import axios from 'axios';
import { config } from '../../config';

class ExternalServicesClient {
    private baseUserUrl: string;
    private baseTicketUrl: string;

    constructor() {
        this.baseUserUrl = config.services.userBaseUrl;
        this.baseTicketUrl = config.services.ticketBaseUrl;
    }

    async verifyTicketExists(ticket_identifier: string, token: string) {
        return await axios.get(`${this.baseTicketUrl}/tickets/${ticket_identifier}`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.data);
    }

    async verifyUserExists(user_identifier: string, token: string) {
        return await axios.get(`${this.baseUserUrl}/users/${user_identifier}`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.data);
    }
}

export default ExternalServicesClient;