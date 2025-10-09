import type { Request } from 'express';
import type { Types } from 'mongoose';
import type { ServerPreview } from './server.ts';

export interface User {
  _id: Types.ObjectId;
  personalId: string;
  img?: string | null;
  name: string;
  email: string;
  servers: ServerPreview[];
}

export interface UserPreview {
  _id: Types.ObjectId;
  name: string;
  img?: string | null;
}

export interface Session {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  accessToken: string;
  refreshToken: string;
  accessTokenValidUntil: Date;
  refreshTokenValidUntil: Date;
}

export interface RequestWithUser extends Request {
  user: User;
}

export interface RequestMulter extends RequestWithUser {
  file: any;
}
