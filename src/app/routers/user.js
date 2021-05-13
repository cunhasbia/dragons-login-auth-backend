import { Router } from 'express';

import UserController from '../controllers/UserController';

import { validatePageParams, validateData } from '../middlewares/user';

const routes = new Router();

routes.get('/users', validatePageParams, UserController.index);
routes.get('/users/:uid', UserController.show);
routes.post('/users', validateData, UserController.store);
routes.put('/users/:uid', validateData, UserController.update);
routes.delete('/users/:uid', UserController.delete);

export default routes;
