import { CheckAnalystPermissionDTO } from "../dtos/check-analyst-permission.dto";
import Analyst from "../models/Analyst";

export class CheckAnalystPermissionCase {
    async execute({ analystId }: CheckAnalystPermissionDTO) {
        const analyst = await Analyst.query()
            .where('id', analystId)
            .first();

        if (!analyst) {
            throw new Error('Analista não encontrado');
        }

        return {
            canTriage: analyst.role === 'supervisor',
            role: analyst.role
        };
    }
} 