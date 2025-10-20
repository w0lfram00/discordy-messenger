import React from "react";
import { Srvr, SrvrPreview } from "@/lib/interfaces/api";
import Img from "@/assets/dog.jpg";
import Link from "next/link";

interface Props {
  server: SrvrPreview;
}

const ServerIcon = ({ server }: Props) => {
  return (
    <Link
      href={`/${server._id}`}
      className="h-34 w-34 rounded-4xl overflow-hidden flex"
    >
      <img
        src={server.img != "no-image" ? server.img : Img.src}
        alt={server.name}
        className="object-cover place-self-center"
      />
    </Link>
  );
};

export default ServerIcon;
