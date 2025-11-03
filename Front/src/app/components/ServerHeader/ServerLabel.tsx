import React from "react";

type Props = {
  children: string;
};

const ServerLabel = ({ children }: Props) => {
  return <div className="w-1/6 border-r border-gray-500 p-2">{children}</div>;
};

export default ServerLabel;
