import BaseException from "./base.exception";

class AuthException extends BaseException {
    constructor(message: string, code: string) {
        super(message, 401, code);
    }

    static invalidToken() {
        return new AuthException('Token inválido', 'INVALID_TOKEN');
    }

    static unauthorized() {
        return new AuthException('Não autorizado', 'UNAUTHORIZED');
    }
}

export default AuthException;
