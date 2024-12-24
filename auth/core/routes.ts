import controller from "./controller";
import { Response, Request } from "express";
import { RouterDecorator } from "./lib/routing/router-decorator";

const router = new RouterDecorator();

router.get('/query', (req: Request, res: Response) => {
    return controller.index(req, res);
});

router.post('/users', (req: Request, res: Response) => {
    return controller.store(req, res);
});

router.get('/users/:userId', (req: Request, res: Response) => {
    return controller.show(req, res);
});

router.get('/users/:userId/check-permission', (req: Request, res: Response) => {
    return controller.checkPermission(req, res);
});


router.post('/auth/check-auth', (req: Request, res: Response) => {
    return controller.checkAuth(req, res);
});

router.post('/auth/logout', (req: Request, res: Response) => {
    return controller.logout(req, res);
});

router.get('/auth/me', (req: Request, res: Response) => {
    return controller.me(req, res);
});

const guestRouter = new RouterDecorator();

guestRouter.post('/auth/login', (req: Request, res: Response) => {
    return controller.login(req, res);
});

const refreshRouter = new RouterDecorator();

refreshRouter.get('/auth/refresh', (req: Request, res: Response) => {
    return controller.refresh(req, res);
});

export { guestRouter, refreshRouter, router };