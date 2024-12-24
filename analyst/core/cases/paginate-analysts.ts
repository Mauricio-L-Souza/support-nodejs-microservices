import Analyst from "../models/Analyst";
import { PaginateQueryDTO } from "../dtos/paginate.dto";

export class PaginateAnalystsCase {
    async execute(data: PaginateQueryDTO) {
        return await Analyst.query()
            .paginate({
                page: data.page,
                perPage: data.perPage
            });
    }
}