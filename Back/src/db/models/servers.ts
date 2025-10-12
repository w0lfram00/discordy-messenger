import { model, Schema } from 'mongoose';

const serversSchema = new Schema(
  {
    name: { type: String, required: true },
    channels: [
      {
        _id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
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

export const ServersCollection = model('Server', serversSchema);
