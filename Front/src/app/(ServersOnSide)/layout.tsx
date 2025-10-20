import React from "react";
import ServerSelectSideMenu from "../components/ServerSelectSideMenu/ServerSelectSideMenu";
import getQueryClient from "@/lib/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getUsersServers } from "@/lib/api/paths/users";

interface Props {
  children: React.ReactNode;
}

const ServersOnSideLayout = async ({ children }: Props) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["servers"],
    queryFn: async () => getUsersServers("68eb8a252c11fa108aa34ac5"),
    staleTime: 15 * 60 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="h-screen flex">
      <HydrationBoundary state={dehydratedState}>
        <ServerSelectSideMenu />
      </HydrationBoundary>
      <>{children}</>
    </div>
  );
};

export default ServersOnSideLayout;
