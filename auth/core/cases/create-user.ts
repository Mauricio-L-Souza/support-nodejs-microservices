import bcrypt from "bcrypt";

import User from "../models/User";
import { CreateUserDTO } from "../dtos/create-user.dto";

export class CreateUserCase {
    async execute(data: CreateUserDTO) {
        const user = await User.query().create({
            name: data.name,
            email: data.email,
            password: await bcrypt.hash(data.password, 10)
        });

        return user;
    }
}
