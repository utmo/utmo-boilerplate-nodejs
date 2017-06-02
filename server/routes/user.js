import { Router } from "express";
import validate from "express-validation";

import * as userController from "../controllers/user";
import userValidation from "../validations/user";

const routes = new Router();

routes.post("/signup", validate(userValidation.signup), userController.signUp);

export default routes;
