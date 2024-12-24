import { CreateAnalystDTO } from "../dtos/create-analyst.dto";
import Analyst from "../models/Analyst";

export class CreateAnalystCase {
    async execute(data: CreateAnalystDTO) {
        const analyst = await Analyst.query().create({
            role: data.role
        });

        return analyst;
    }
}
