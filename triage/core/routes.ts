import controller from './controller';
import { Request, Response } from 'express';
import { RouterDecorator } from './lib/routing/router.decorator';

const router = new RouterDecorator();

router.post('/triages', (req: Request, res: Response) => {
    return controller.makeTriage(req, res);
});
router.get('/triages/:id', (req: Request, res: Response) => {
    return controller.show(req, res);
});
router.post('/categories', (req: Request, res: Response) => {
    return controller.createCategory(req, res);
});



export default router.getRouter();
