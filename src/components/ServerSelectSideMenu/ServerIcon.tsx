import React from "react";
import type { Server } from "../../types/server";

interface Props {
  server: Server;
}

const ServerIcon = ({ server }: Props) => {
  return (
    <div>
      <img src={server.img} alt={server.name} />
    </div>
  );
};

export default ServerIcon;
