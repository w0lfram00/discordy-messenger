import React from "react";
import s from "./ServerSelectSideMenu.module.css";
import { Srvr } from "@/lib/interfaces/api";

interface Props {
  server: Srvr;
}

const ServerIcon = ({ server }: Props) => {
  return (
    <a className={s.serverIcon}>
      <img src={server.img} alt={server.name} />
    </a>
  );
};

export default ServerIcon;
