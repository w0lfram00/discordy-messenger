import React from "react";
import ServerSelectSideMenu from "../components/ServerSelectSideMenu/ServerSelectSideMenu";

interface Props {
  children: React.ReactNode;
}

const ServersOnSideLayout = async ({ children }: Props) => {
  return (
    <div className="h-screen flex">
      <ServerSelectSideMenu />
      {children}
    </div>
  );
};

export default ServersOnSideLayout;
