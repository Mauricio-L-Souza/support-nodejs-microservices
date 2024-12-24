declare global {
    namespace Express {
        interface Request {
            user_id: number;
            token: string;
        }
    }
}

export {}