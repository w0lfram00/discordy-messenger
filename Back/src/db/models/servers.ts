import { model, Schema } from 'mongoose';
import { channelsSchema } from './channels.ts';

const serversSchema = new Schema(
  {
    name: { type: String, required: true },
    channels: [channelsSchema],
    users: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        img: {
          type: String,
          required: true,
        },
      },
    ],
    img: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const ServersCollection = model('Recipe', serversSchema);
