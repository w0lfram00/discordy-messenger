import React from "react";
import ServerLabel from "./ServerLabel";
import ChannelMeta from "./ChannelMeta";
import { Srvr } from "@/lib/interfaces/api";

type Props = {
  srvr: Srvr;
};

const ServerHeader = ({ srvr }: Props) => {
  return (
    <div className="flex border border-gray-600 text-xl">
      <ServerLabel>{srvr.name}</ServerLabel>
      <ChannelMeta />
    </div>
  );
};

export default ServerHeader;
