import { model, Schema } from 'mongoose';

const serversSchema = new Schema(
  {
    name: { type: String, required: true },
    channels: [
      {
        type: Schema.Types.ObjectId,
        index: true,
        ref: 'Channels',
        required: true,
      },
    ],
    img: { type: String },
  },
  { timestamps: true, versionKey: false },
);

export const ServersCollection = model('Recipe', serversSchema);
