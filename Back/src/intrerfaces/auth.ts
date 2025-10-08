import Types from 'mongoose';

export interface User {
  _id: Types.ObjectId;
  name: string;
  email: string;
  servers: Types.ObjectId[];
}

export interface Session {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  accessToken: string;
  refreshToken: string;
  accessTokenValidUntil: Date;
  refreshTokenValidUntil: Date;
}
