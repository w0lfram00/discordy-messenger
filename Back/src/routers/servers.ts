import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.ts';
import { ctrlWrapper } from '../utils/ctrlWrapper.ts';
import {
  createSrvrController,
  deleteSrvrController,
  getSrvrInfoController,
} from '../controllers/servers.ts';
import { createSrvrSchema } from '../validation/servers.ts';
import { authenticate } from '../middlewares/authenticate.ts';
import { isValidId } from '../middlewares/isValidId.ts';

const srvrsRouter = Router();

srvrsRouter.get(
  '/:srvrId',
  isValidId('srvrId'),
  ctrlWrapper(getSrvrInfoController),
);

srvrsRouter.use(authenticate);

srvrsRouter.post(
  '/',
  validateBody(createSrvrSchema),
  ctrlWrapper(createSrvrController),
);

srvrsRouter.delete(
  '/:srvrId',
  isValidId('srvrId'),
  ctrlWrapper(deleteSrvrController),
);

export default srvrsRouter;
