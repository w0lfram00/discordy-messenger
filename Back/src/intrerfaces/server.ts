import Types from 'mongoose';

interface Server {
  _id: Types.ObjectId;
  name: string;
  channels: Types.ObjectId[];
  img: string | null;
}

interface Message {
  _id: Types.ObjectId;
  channel: Types.ObjectId;
  sender: Types.ObjectId;
  textContent: string;
}

interface Channel {
  _id: Types.ObjectId;
  name: string;
  position: number;
}
