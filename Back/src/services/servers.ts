import type { Srvr } from '../interfaces/server.ts';
import { ServersCollection } from '../db/models/servers.ts';
import type { Types } from 'mongoose';
import { UsersCollection } from '../db/models/users.ts';
import type { User } from '../interfaces/auth.ts';

export const getSrvrInfo = async (
  srvrId: Types.ObjectId | undefined,
): Promise<Srvr | null> => {
  const srvr = await ServersCollection.findById(srvrId);
  return srvr;
};

export const createSrvr = async (payload: {
  srvr: Omit<Srvr, '_id'>;
  user: User;
}): Promise<Srvr> => {
  const srvr = await ServersCollection.create(payload.srvr);
  if (srvr)
    await UsersCollection.findByIdAndUpdate(payload.user._id, {
      servers: [...payload.user.servers, srvr],
    });

  return srvr;
};

export const deleteSrvr = async (
  srvrId: Types.ObjectId | undefined,
): Promise<Srvr | null> => {
  return await ServersCollection.findByIdAndDelete(srvrId);
};
