import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';
import type { Request, Response, NextFunction } from 'express';

export const isValidId =
  (idName?: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const id = idName ? req.params[idName] : req.params[0];
    if (!id || !isValidObjectId(id)) {
      throw createHttpError(400, 'Bad request');
    }

    next();
  };
