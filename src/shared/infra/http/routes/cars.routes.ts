import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

import { ListAvailableCarsController } from "@modules/cars/useCases/listAvaiableCars/listAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
    "/", 
    ensureAuthenticate, 
    ensureAdmin, 
    createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle)

carsRoutes.post(
    "/specifications/:id", 
    ensureAuthenticate,
    ensureAdmin,
    createCarSpecificationController.handle
);

export { carsRoutes };