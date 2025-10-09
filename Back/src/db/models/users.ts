import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    personalId: { type: String, required: true },
    email: { type: String, required: true },
    img: { type: String },
    password: { type: String, required: true },
    servers: [
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
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

usersSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('User', usersSchema);
