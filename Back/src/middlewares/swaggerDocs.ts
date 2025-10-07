import createHttpError from 'http-errors';
import swaggerUI from 'swagger-ui-express';
import fs from 'node:fs';
import type { NextFunction, Request, Response } from 'express';

import { SWAGGER_PATH } from '../constants/index.ts';

export const swaggerDocs = () => {
  try {
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH).toString());
    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)];
  } catch (err) {
    return (req: Request, res: Response, next: NextFunction) =>
      next(createHttpError(500, "Can't load swagger docs"));
  }
};
