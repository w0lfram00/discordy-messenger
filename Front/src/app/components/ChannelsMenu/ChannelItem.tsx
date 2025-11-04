"use client";

import { Channel } from "@/lib/interfaces/api";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHashtag } from "react-icons/fa";

type Props = {
  channel: Channel;
};

const ChannelItem = ({ channel }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <FaHashtag color="white" size={20} />
      <p>{channel.name}</p>
    </>
  );
};

export default ChannelItem;
