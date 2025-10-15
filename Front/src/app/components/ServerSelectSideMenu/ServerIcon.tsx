import React from "react";
import s from "./ServerSelectSideMenu.module.css";
import { Srvr, SrvrPreview } from "@/lib/interfaces/api";

interface Props {
  server: SrvrPreview;
}

const ServerIcon = ({ server }: Props) => {
  return (
    <a className={s.serverIcon}>
      <img src={server.img} alt={server.name} />
    </a>
  );
};

export default ServerIcon;
