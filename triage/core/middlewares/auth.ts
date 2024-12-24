import { NextFunction, Request, Response } from "express";
import AuthClient from "../clients/auth.client";
import AuthException from "../exceptions/auth.exception";

const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw AuthException.invalidToken();
        }

        const client = new AuthClient();
        const result = await client.checkAuth(token);

        req.user_id = result.user_id;
        req.token = token;
        next();
    } catch (error) {
        next(error);
    }
};

export default auth;