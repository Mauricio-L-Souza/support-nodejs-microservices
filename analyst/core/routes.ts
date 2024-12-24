import controller from "./controller";
import { Response, Request } from "express";
import { RouterDecorator } from "./lib/routing/RouterDecorator";

const router = new RouterDecorator();

router.get('/query', (req: Request, res: Response) => {
    return controller.index(req, res);
});

router.post('/analysts', (req: Request, res: Response) => {
    return controller.store(req, res);
});

router.get('/analysts/:analystId/check-permission', (req: Request, res: Response) => {
    return controller.checkPermission(req, res);
});

export default router.getRouter();