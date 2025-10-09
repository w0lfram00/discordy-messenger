import type { Types } from 'mongoose';
import type { UserPreview } from './auth.ts';

export interface ServerPreview {
  _id: Types.ObjectId;
  name: string;
  img?: string | null;
}

export interface Channel {
  _id: Types.ObjectId;
  name: string;
  position: number;
}

export interface Server {
  _id: Types.ObjectId;
  name: string;
  img?: string | null;
  channels: Channel[];
  users: UserPreview[];
}

export interface Message {
  _id: Types.ObjectId;
  channel: Types.ObjectId;
  sender: Types.ObjectId;
  textContent: string;
}
