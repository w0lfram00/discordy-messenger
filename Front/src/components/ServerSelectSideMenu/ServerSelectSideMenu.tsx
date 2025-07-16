import React from "react";
import type { Server } from "../../types/server";
import ServerIcon from "./ServerIcon";
import s from "./ServerSelectSideMenu.module.css";

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
