import { ZodError } from "zod";
import { AxiosError } from "axios";
import BaseException from "../../exceptions/base.exception";
import { AppError } from "../../errors/app.error";

function ExceptionHandler (err: any, req: any, res: any, next: any) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ 
            message: err.message 
        });
    }

    if (err instanceof AxiosError) {
        return res.status(err.response?.status || 500).json({
            message: err.message,
            details: err.response?.data,
        });
    }

    if (err instanceof ZodError) {
        return res.status(400).json({
            message: 'Erro de validação',
            errors: err.errors.map(error => ({
                field: error.path.join('.'),
                message: error.message
            }))
        });
    }

    if (err instanceof BaseException) {
        return res.status(err.statusCode).json({
            message: err.message,
            code: err.code
        });
    }

    console.log({ err });

    return res.status(500).json({ 
        message: 'Erro interno do servidor'
    });
}

export default ExceptionHandler;

