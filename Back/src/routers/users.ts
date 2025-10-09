import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.ts';
import { isValidId } from '../middlewares/isValidId.ts';

const usersRouter = Router();

usersRouter.use(authenticate);

usersRouter.get('/:userId/servers', isValidId('userId'));

export default usersRouter;
