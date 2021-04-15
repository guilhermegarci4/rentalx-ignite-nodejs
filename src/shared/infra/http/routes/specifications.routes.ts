import { Router } from 'express';

import { ensureAuthenticate } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '@modules/cars/useCases/createSpecificationController.ts/CreateSpecificationController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", ensureAuthenticate, ensureAdmin, createSpecificationController.handle);

export { specificationsRoutes };