import ChannelsMenu from "@/app/components/ChannelsMenu/ChannelsMenu";
import ServerHeader from "@/app/components/ServerHeader/ServerHeader";
import UsersMenu from "@/app/components/UsersMenu/UsersMenu";
import { getSrvrInfo } from "@/lib/api/paths/servers";
import { Srvr } from "@/lib/interfaces/api";
import getQueryClient from "@/lib/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ serverId: string }>;
  children: React.ReactNode;
};
const Layout = async ({ params, children }: Props) => {
  const queryClient = getQueryClient();
  const { serverId } = await params;

  await queryClient.prefetchQuery({
    queryKey: ["servers", serverId],
    queryFn: () => getSrvrInfo(serverId),
    staleTime: 3 * 60 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  const srvr = queryClient.getQueryData(["servers", serverId]) as Srvr;
  if (!srvr) notFound();

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="w-full flex flex-col">
        <ServerHeader srvr={srvr} />
        <div className="flex w-full flex-1">
          <ChannelsMenu />
          <div className="w-2/3 bg-neutral-900 border-1 border-gray-600 border-y-0">
            {children}
          </div>
          <UsersMenu />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
