import { Router } from "express";
import { AuthenticateUserController } from "../modules/cars/useCases/authenticateUser/AuthenticatorUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes }