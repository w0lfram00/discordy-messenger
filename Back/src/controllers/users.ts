import type { Request, Response } from 'express';
import type { RequestWithUser } from '../interfaces/auth.ts';
import { getUsersInfo, getUsersSrvrs } from '../services/users.ts';
import createHttpError from 'http-errors';
import { toObjId } from '../utils/toObjId.ts';

export const getUsersInfoController = async (req: Request, res: Response) => {
  const user = await getUsersInfo(toObjId(req.params.userId));

  if (!user) throw createHttpError(404, 'User not found');

  res.json({
    status: 200,
    message: 'Successfully got users info!',
    data: user,
  });
};

export const getUsersSrvrsController = async (req: Request, res: Response) => {
  const servers = await getUsersSrvrs(toObjId(req.params.userId));

  if (!servers) throw createHttpError(404, 'User not found');

  res.json({
    status: 200,
    message: 'Successfully fetched servers!',
    data: servers,
  });
};
