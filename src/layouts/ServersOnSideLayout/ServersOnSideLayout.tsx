import React from "react";
import ServerSelectSideMenu from "../../components/ServerSelectSideMenu/ServerSelectSideMenu";

type Props = {
  children: React.ReactNode;
};

const SoloPageLayout = ({ children }: Props) => {
  return (
    <div>
      <ServerSelectSideMenu />
      <div>{children}</div>
    </div>
  );
};

export default SoloPageLayout;
