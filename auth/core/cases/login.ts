import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { config } from '../../config';
import { LoginDTO } from "../dtos/login.dto";

export class LoginCase {
    async execute(payload: LoginDTO) {
        const user = await User.query().where('email', payload.email).first();

        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(payload.password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const accessToken = jwt.sign({ userId: user.id }, config.auth.jwtSecret, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ userId: user.id }, config.auth.jwtSecret, { expiresIn: '7d' });

        return { accessToken, refreshToken };
    }
} 