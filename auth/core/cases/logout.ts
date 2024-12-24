import { config } from "../../config";
import TokenBlacklist from "../models/TokenBlacklist";
import User from "../models/UserPermission";
import { LogoutDTO } from "../dtos/logout.dto";
import jwt from "jsonwebtoken";

export class LogoutCase {
    async execute(userID: number, payload: LogoutDTO) {
        const { token } = payload;

        const user = await User.query().where("id", userID).first();

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        await TokenBlacklist.query().create({ token });

        return { message: "logout_success" };
    }
} 