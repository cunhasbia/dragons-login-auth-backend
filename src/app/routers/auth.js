import { Router } from 'express';

import AuthController from '../controllers/AuthController';

const routes = new Router();

routes.post('/login', AuthController.store);

export default routes;
