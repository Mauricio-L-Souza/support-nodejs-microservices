import jwt from "jsonwebtoken";

import { config } from "../../config";
import User from "../models/UserPermission";
import { RefreshDTO } from "../dtos/refresh.dto";
import TokenBlacklist from "../models/TokenBlacklist";

export class RefreshCase {
    async execute(payload: RefreshDTO) {

        const decoded = jwt.verify(payload.refreshToken, config.auth.jwtSecret) as { id: number };
        const user = await User.query().where("id", decoded.id).first();

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const tokenBlacklist = await TokenBlacklist.query().where("token", payload.refreshToken).first();
        if (tokenBlacklist) {
            throw new Error("Token já está na blacklist");
        }

        await TokenBlacklist.query().create({ token: payload.refreshToken });

        const token = jwt.sign({ id: user.id }, config.auth.jwtSecret, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ id: user.id }, config.auth.jwtSecret, { expiresIn: "7d" }); 

        return { token, refreshToken };
    }
}
