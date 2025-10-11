import type { Request } from 'express';
import type { Types } from 'mongoose';
import type { SrvrPreview } from './server.ts';

export interface User {
  _id: Types.ObjectId;
  img: string;
  name: string;
  email: string;
  servers: SrvrPreview[];
}

export interface UserPreview extends Pick<User, '_id' | 'name' | 'img'> {}

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
