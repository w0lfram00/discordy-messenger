import type { Request, Response } from 'express';
import type { RequestWithUser } from '../interfaces/auth.ts';
import { getUsersSrvrs } from '../services/users.ts';
import createHttpError from 'http-errors';
import { toObjId } from '../utils/toObjId.ts';

export const getUsersSrvrsController = async (
  req: RequestWithUser,
  res: Response,
) => {
  const servers = await getUsersSrvrs(toObjId(req.params.userId));

  if (!servers) throw createHttpError(404, 'User not found');

  res.json({
    status: 200,
    message: 'Successfully fetched servers!',
    data: servers,
  });
};
