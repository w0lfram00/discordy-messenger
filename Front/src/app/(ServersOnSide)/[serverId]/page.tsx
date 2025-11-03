"use client";

import { getSrvrInfo } from "@/lib/api/paths/servers";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type Props = { params: Promise<{ serverId: string }> };

const Page = ({ params }: Props) => {
  const { serverId } = React.use(params);

  const { data: srvr } = useQuery({
    queryKey: ["servers", serverId],
    queryFn: () => getSrvrInfo(serverId),
    staleTime: 3 * 60 * 1000,
  });

  if (!srvr) return null;
  return (
    <div className="flex flex-col justify-center h-screen p-5">
      <h3 className="text-center text-5xl">Welcome to {srvr?.name}!</h3>
    </div>
  );
};

export default Page;
