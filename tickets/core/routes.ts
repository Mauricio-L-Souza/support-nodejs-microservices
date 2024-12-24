import { Response, Request } from "express";

import controller from "./controller";
import { RouterDecorator } from "./lib/routing/RouterDecorator";

const router = new RouterDecorator();

router.get('/query', (req: Request, res: Response) => {
    return controller.index(req, res);
});

router.get('/tickets/:id', (req: Request, res: Response) => {
    return controller.show(req, res);
});

router.post('/tickets', (req: Request, res: Response) => {
    return controller.store(req, res);
});

export default router.getRouter();