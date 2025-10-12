import type { Types } from 'mongoose';
import type { UserPreview } from './auth.ts';

export interface Channel {
  _id: string;
  name: string;
}

export interface Srvr {
  _id: Types.ObjectId;
  name: string;
  img: string;
  channels: Channel[];
  users: UserPreview[];
}

export interface SrvrPreview extends Pick<Srvr, '_id' | 'name' | 'img'> {}

export interface Message {
  _id: Types.ObjectId;
  server: Types.ObjectId;
  channel: Types.ObjectId;
  sender: Types.ObjectId;
  textContent: string;
}
