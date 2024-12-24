import { NextFunction, Request, Response } from "express";

import { CheckAuthCase } from "../cases/check-auth";
import AuthException from "../exceptions/auth.exception";

const validateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw AuthException.invalidToken();
        }



        const checkAuthCase = new CheckAuthCase();
        const result = await checkAuthCase.execute({ token });

        if (!result.isValid) {
            throw AuthException.invalidToken();
        }

        req.user_id = result.user_id;
        next();
    } catch (error) {
        next(error);
    }
};

export default validateToken;
