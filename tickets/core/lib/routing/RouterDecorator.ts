import { Router } from 'express';
import { AppWrapper } from '../app/app.wrapper';

export class RouterDecorator {
    private router: Router;

    constructor() {
        this.router = Router();
    }

    get(path: string, handler: any) {
        this.router.get(path, AppWrapper(handler));
    }

    post(path: string, handler: any) {
        this.router.post(path, AppWrapper(handler));
    }

    put(path: string, handler: any) {
        this.router.put(path, AppWrapper(handler));
    }

    delete(path: string, handler: any) {
        this.router.delete(path, AppWrapper(handler));
    }

    getRouter() {
        return this.router;
    }
} 