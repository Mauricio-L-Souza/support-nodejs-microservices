import User from "../models/User";
import UserPermission from "../models/UserPermission";
import { CheckUserPermissionDTO } from "../dtos/check-user-permission.dto";

export class CheckUserPermissionCase {
    async execute(payload: CheckUserPermissionDTO) {
        const user = await User.query()
            .where('id', payload.userId)
            .first();

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const userPermission = await UserPermission.query()
            .where('permission', payload.permission)
            .where('user_id', user.id)
            .first();

        if (!userPermission) {
            throw new Error('Usuário não possui permissão');
        }

        return {
            userId: user.id,
            hasPermission: true,
            permission: userPermission.permission
        };
    }
} 