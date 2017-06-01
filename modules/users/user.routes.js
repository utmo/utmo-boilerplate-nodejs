import { Router } from 'express';
import userController from './user.controllers';

const routes = new Router();

routes.get('/', userController);

export default routes;
