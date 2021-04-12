import { Router } from 'express';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '@modules/cars/useCases/createSpecificationController.ts/CreateSpecificationController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticate);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };