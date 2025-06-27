import React from "react";
import ServerSelectSideMenu from "../../components/ServerSelectSideMenu/ServerSelectSideMenu";
import servers from "../../assets/testData/servers.json";
import type { Server } from "../../types/server";
import s from "./ServersOnSideLayout.module.css";

interface Props {
  children: React.ReactNode;
}

const ServersOnSideLayout = ({ children }: Props) => {
  return (
    <div className={s.viewport}>
      <ServerSelectSideMenu servers={servers} />
      <div>{children}</div>
    </div>
  );
};

export default ServersOnSideLayout;
