import type { Request, Response } from 'express';
import type { RequestWithUser } from '../interfaces/auth.ts';
import { createSrvr, deleteSrvr, getSrvrInfo } from '../services/servers.ts';
import { toObjId } from '../utils/toObjId.ts';
import createHttpError from 'http-errors';
import { randomBytes } from 'crypto';

export const getSrvrInfoController = async (req: Request, res: Response) => {
  const srvr = await getSrvrInfo(toObjId(req.params.recipeId));

  if (!srvr) throw createHttpError(404, 'Server not found');

  res.json({
    status: 200,
    message: `Successfully fetched for data of ${srvr.name} server!`,
    data: srvr,
  });
};

export const createSrvrController = async (
  req: RequestWithUser,
  res: Response,
) => {
  let { name, img } = req.body as { name: string; img?: string };
  if (!img) img = 'no-image';

  const srvr = await createSrvr({
    name,
    img,
    channels: [{ _id: randomBytes(8).toString('hex'), name: 'general' }],
    users: [{ _id: req.user._id, name: req.user.name, img: req.user.img }],
  });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a server!',
    data: srvr,
  });
};

export const deleteSrvrController = async (
  req: RequestWithUser,
  res: Response,
) => {
  const srvr = deleteSrvr(toObjId(req.params.srvrId));
  if (!srvr) throw createHttpError(404, 'Server not found');

  res.status(204).send();
};
