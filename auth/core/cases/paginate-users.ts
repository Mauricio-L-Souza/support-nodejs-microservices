import User from "../models/User";
import { PaginateQueryDTO } from "../dtos/paginate.dto";

export class PaginateUsersCase {
    async execute(data: PaginateQueryDTO) {
        return await User.query()
            .paginate({
                page: data.page,
                perPage: data.perPage
            });
    }
}