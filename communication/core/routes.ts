import { Response, Request } from "express";

import controller from "./controller";
import { RouterDecorator } from "./lib/routing/RouterDecorator";

const router = new RouterDecorator();

router.get('/communications/:ticketId/query', (req: Request, res: Response) => {
    return controller.index(req, res);
});

router.post('/communications', (req: Request, res: Response) => {
    return controller.store(req, res);
});

export default router.getRouter();