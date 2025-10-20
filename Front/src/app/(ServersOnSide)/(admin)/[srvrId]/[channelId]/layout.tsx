import ChannelsMenu from "@/app/components/ChannelsMenu/ChannelsMenu";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type Props = {};

const Layout = (props: Props) => {
  const { data } = useQuery({});

  return <ChannelsMenu channels={} />;
};

export default Layout;
