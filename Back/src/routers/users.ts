import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.ts';
import { isValidId } from '../middlewares/isValidId.ts';
import { ctrlWrapper } from '../utils/ctrlWrapper.ts';
import { getUsersSrvrsController } from '../controllers/users.ts';

const usersRouter = Router();

usersRouter.get(
  '/:userId/servers',
  isValidId('userId'),
  ctrlWrapper(getUsersSrvrsController),
);

usersRouter.use(authenticate);

export default usersRouter;
