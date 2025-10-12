export interface User {
  _id: string;
  img: string;
  name: string;
  email: string;
  servers: SrvrPreview[];
}

export interface UserPreview extends Pick<User, "_id" | "name" | "img"> {}

export interface Channel {
  _id: string;
  name: string;
}

export interface Srvr {
  _id: string;
  name: string;
  img: string;
  channels: Channel[];
  users: UserPreview[];
}

export interface SrvrPreview extends Pick<Srvr, "_id" | "name" | "img"> {}

export interface Message {
  _id: string;
  server: string;
  channel: string;
  sender: string;
  textContent: string;
}
