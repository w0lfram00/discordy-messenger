import { model, Schema } from 'mongoose';

const messagesSchema = new Schema(
  {
    channel: { type: Schema.Types.ObjectId, required: true },
    sender: { type: Schema.Types.ObjectId, required: true },
    textContent: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const MessagesCollection = model('Recipe', messagesSchema);
