import React from "react";
import ServerIcon from "./ServerIcon";
import s from "./ServerSelectSideMenu.module.css";
import { Srvr } from "@/lib/interfaces/api";

type Props = {
  servers: Array<Srvr>;
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
