import express from 'express';
import { sutando } from 'sutando';

import { guestRouter, refreshRouter, router } from './core/routes';

import config from './sutando.config.js';
import ExceptionHandler from './core/lib/app/exception-handler';
import validateToken from './core/middlewares/validate-token';

sutando.addConnection(config);

const app = express();
app.use(express.json());

app.use('/api/guest', guestRouter.getRouter());
app.use('/api/refresh', refreshRouter.getRouter());

// app.use('/api/v1', validateToken);
app.use('/api/v1', router.getRouter());

app.use(ExceptionHandler);
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});