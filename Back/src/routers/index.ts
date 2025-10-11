import { Router } from 'express';
import usersRouter from './users.ts';
import authRouter from './auth.ts';
import srvrsRouter from './servers.ts';
import channelsRouter from './channels.ts';
import messagesRouter from './messages.ts';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/servers', srvrsRouter);
router.use('/:serverId/channels', channelsRouter);
router.use('/:serverId/:channelId/messages', messagesRouter);

export default router;
