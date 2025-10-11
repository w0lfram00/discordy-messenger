import type { Srvr } from '../interfaces/server.ts';
import { ServersCollection } from '../db/models/servers.ts';
import type { Types } from 'mongoose';

export const getSrvrInfo = async (
  srvrId: Types.ObjectId | undefined,
): Promise<Srvr | null> => {
  const srvr = await ServersCollection.findById(srvrId);
  return srvr;
};

export const createSrvr = async (payload: Omit<Srvr, '_id'>): Promise<Srvr> => {
  const srvr = await ServersCollection.create(payload);
  // TODO: user joins server
  return srvr;
};

export const deleteSrvr = async (
  srvrId: Types.ObjectId | undefined,
): Promise<Srvr | null> => {
  return await ServersCollection.findByIdAndDelete(srvrId);
};
