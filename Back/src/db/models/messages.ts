import { model, Schema } from 'mongoose';

const messagesSchema = new Schema(
  {
    server: { type: Schema.Types.ObjectId, required: true },
    channel: { type: Schema.Types.ObjectId, required: true },
    sender: { type: Schema.Types.ObjectId, required: true },
    textContent: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const MessagesCollection = model('Message', messagesSchema);
