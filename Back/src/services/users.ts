import type { Types } from 'mongoose';
import { UsersCollection } from '../db/models/users.ts';
import type { SrvrPreview } from '../interfaces/server.ts';

export const getUsersSrvrs = async (
  userId: Types.ObjectId | undefined,
): Promise<SrvrPreview[] | null> => {
  const user = await UsersCollection.findById(userId);

  if (!user) return null;

  return user.servers;
};
