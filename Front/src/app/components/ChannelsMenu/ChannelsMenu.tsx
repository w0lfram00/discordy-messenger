import { Srvr } from "@/lib/interfaces/api";
import React from "react";
import ChannelItem from "./ChannelItem";
import Link from "next/link";

type Props = {
  srvr: Srvr;
};

const ChannelsMenu = ({ srvr }: Props) => {
  return (
    <ul className="w-1/6 flex flex-col gap-3 p-5">
      {srvr.channels.map((channel) => (
        <li key={channel._id}>
          <Link
            className="flex gap-1 p-1 items-center rounded-xl hover:bg-gray-800"
            href={`/${srvr._id}/${channel._id}`}
            replace
          >
            <ChannelItem channel={channel} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ChannelsMenu;
