import React from "react";
import ServerSelectSideMenu from "../../components/ServerSelectSideMenu/ServerSelectSideMenu";

interface Props {
  children: React.ReactNode;
}

const ServersOnSideLayout = ({ children }: Props) => {
  return (
    <div>
      <ServerSelectSideMenu />
      <div>{children}</div>
    </div>
  );
};

export default ServersOnSideLayout;
