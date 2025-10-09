import type { Types } from 'mongoose';
import { UsersCollection } from '../db/models/users.ts';
import type { ServerPreview } from '../interfaces/server.ts';

export const getUsersServers = async (
  userId: Types.ObjectId,
): Promise<ServerPreview[] | null> => {
  const user = await UsersCollection.findById(userId);

  if (!user) return null;

  return user.servers;
};
