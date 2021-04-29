import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

import { ListAvailableCarsController } from "@modules/cars/useCases/listAvaiableCars/listAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";
import { UploadCarImageController } from "@modules/cars/useCases/uploadCarImage/UploadCarImageController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImageController();

const upload = multer(uploadConfig.upload("./tmp/cars"));


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

carsRoutes.post(
    "/images/:id", 
    ensureAuthenticate, 
    ensureAdmin, 
    upload.array("images"),
    uploadCarImagesController.handle
)

export { carsRoutes };