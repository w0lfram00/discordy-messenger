import React from "react";
import type { Server } from "../../types/server";
import s from "./ServerSelectSideMenu.module.css";

interface Props {
  server: Server;
}

const ServerIcon = ({ server }: Props) => {
  return (
    <a className={s.serverIcon}>
      <img src={server.img} alt={server.name} />
    </a>
  );
};

export default ServerIcon;
