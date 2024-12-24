import User from "../models/User";

export class ShowUser {
    async execute(id: number) {
        const user = await User.query().find(id);
        return user;
    }
} 