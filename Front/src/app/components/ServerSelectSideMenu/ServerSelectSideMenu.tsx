import React from "react";
import ServerIcon from "./ServerIcon";
import s from "./ServerSelectSideMenu.module.css";
import { Server } from "@/interfaces/db";

type Props = {
  servers: Array<Server>;
};

const ServerSelectSideMenu = ({ servers }: Props) => {
  return (
    <div className={s.serverSideMenu}>
      {servers.map((server) => (
        <ServerIcon key={server._id} server={server} />
      ))}
    </div>
  );
};

export default ServerSelectSideMenu;
