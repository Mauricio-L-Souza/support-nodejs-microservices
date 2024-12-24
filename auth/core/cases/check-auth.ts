import jwt, { JsonWebTokenError } from "jsonwebtoken";

import User from "../models/User";
import { config } from "../../config";
import { CheckAuthDTO } from "../dtos/check-auth.dto";
import TokenBlacklist from "../models/TokenBlacklist";
import AuthException from "../exceptions/auth.exception";


export class CheckAuthCase {
    async execute(payload: CheckAuthDTO) {
        const { token } = payload;

        if (!token) {
            throw new Error("Token não fornecido");
        }

        const tokenBlacklist = await TokenBlacklist.query().where("token", token).first();
        if (tokenBlacklist) {
            throw new Error("Token inválido");
        }

        let decoded: any;
        try {
            decoded = jwt.verify(token, config.auth.jwtSecret);
        } catch (error) {
            if (error instanceof JsonWebTokenError) {
                throw AuthException.invalidToken();
            }
        }

        const user = await User.query().where("id", decoded.userId).first();

        if (!user) {
            await TokenBlacklist.query().create({ token });
            throw new Error("Usuário não encontrado");
        }

        return {
            isValid: true,
            user_id: user.id,
            message: "token_valid",
        };
    }
} 