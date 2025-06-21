import React from "react";
import type { Server } from "../../types/server";
import ServerIcon from "./ServerIcon";

type Props = {
  servers: Array<Server>;
};

const ServerSelectSideMenu = ({ servers }: Props) => {
  return (
    <div>
      {servers.map((server) => (
        <ServerIcon server={server} />
      ))}
    </div>
  );
};

export default ServerSelectSideMenu;
