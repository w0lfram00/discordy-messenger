import React from "react";
import s from "./ServersOnSideLayout.module.css";
import ServerSelectSideMenu from "../components/ServerSelectSideMenu/ServerSelectSideMenu";

interface Props {
  children: React.ReactNode;
}

const ServersOnSideLayout = ({ children }: Props) => {
  return (
    <div className="h-screen">
      <ServerSelectSideMenu />
      <div>{children}</div>
    </div>
  );
};

export default ServersOnSideLayout;
