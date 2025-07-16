import { Router } from 'express';
import authRouter from './auth';
import serversRouter from './servers';
import channelsRouter from './channels';
import messagesRouter from './messages';

const router = Router();

router.use('/auth', authRouter);
router.use('/servers', serversRouter);
router.use('/:serverId/channels', channelsRouter);
router.use('/:serverId/:channelId/messages', messagesRouter);

export default router;
