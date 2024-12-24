import BaseException from "./base.exception";

class AuthException extends BaseException {
    constructor(message: string, code: string) {
        super(message, 401, code);
    }

    static invalidToken() {
        return new AuthException('Token inválido', 'INVALID_TOKEN');
    }

    static expiredToken() {
        return new AuthException('Token expirado', 'EXPIRED_TOKEN');
    }

    static invalidCredentials() {
        return new AuthException('Credenciais inválidas', 'INVALID_CREDENTIALS');
    }

    static unauthorized() {
        return new AuthException('Não autorizado', 'UNAUTHORIZED');
    }

    static invalidRefreshToken() {
        return new AuthException('Token de atualização inválido', 'INVALID_REFRESH_TOKEN');
    }
}

export default AuthException;
