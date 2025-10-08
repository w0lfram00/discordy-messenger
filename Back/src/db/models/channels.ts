import { model, Schema } from 'mongoose';

const channelsSchema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const ChannelsCollection = model('Recipe', channelsSchema);
