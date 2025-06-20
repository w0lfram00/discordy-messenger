import React from "react";

type Props = {
  children: React.ReactNode;
};

const SoloPageLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SoloPageLayout;
