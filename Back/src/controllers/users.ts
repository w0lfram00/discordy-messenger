import type { Request, Response } from 'express';
import type { RequestWithUser } from '../interfaces/auth.ts';
import { getUsersServers } from '../services/users.ts';
import createHttpError from 'http-errors';

export const getUsersServersController = async (
  req: RequestWithUser,
  res: Response,
) => {
  const servers = await getUsersServers(req.user._id);

  if (!servers) throw createHttpError(404, 'User not found');

  res.json({
    status: 200,
    message: 'Successfully fetched servers!',
    data: servers,
  });
};
