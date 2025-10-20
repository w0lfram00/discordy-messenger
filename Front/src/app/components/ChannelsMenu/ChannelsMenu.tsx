import { Channel } from "@/lib/interfaces/api";
import React from "react";
import ChannelItem from "./ChannelItem";

type Props = {
  channels: Channel[];
};

const ChannelsMenu = ({ channels }: Props) => {
  return (
    <ul>
      {channels.map((channel) => (
        <ChannelItem channel={channel} key={channel._id} />
      ))}
    </ul>
  );
};

export default ChannelsMenu;
