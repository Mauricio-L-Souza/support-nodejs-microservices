import axios from 'axios';
import { config } from '../../config';

class AuthClient {
    private baseUrl: string;

    constructor() {
        this.baseUrl = config.auth.baseUrl;
    }

    async checkAuth(token: string) {
        const response = await axios.post(`${this.baseUrl}/auth/check-auth`, {
            token
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data);

        return response;
    }
}

export default AuthClient;