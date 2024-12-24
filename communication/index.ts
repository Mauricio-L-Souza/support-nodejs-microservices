import express from 'express';
import { sutando } from 'sutando';

import routes from './core/routes';

import config from './sutando.config.js';
import ExceptionHandler from './core/lib/app/exception-handler';
import auth from './core/middlewares/auth';

sutando.addConnection(config);

const app = express();
app.use(express.json());
app.use(auth);

app.use('/api/v1', routes);

app.use(ExceptionHandler);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});