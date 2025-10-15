import React from "react";
import ServerIcon from "./ServerIcon";
import s from "./ServerSelectSideMenu.module.css";
import { Srvr } from "@/lib/interfaces/api";
import getQueryClient from "@/lib/utils/getQueryClient";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/lib/api/paths/users";

type Props = {
  servers: Array<Srvr>;
};

const ServerSelectSideMenu = () => {
  const queryClient = getQueryClient();

  const { data } = useQuery({
    queryKey: ["servers"],
    queryFn: () => getUserInfo("68eb8a252c11fa108aa34ac5"),
    staleTime: 15 * 60 * 1000,
  });

  return (
    <div className={s.serverSideMenu}>
      {data &&
        data.servers &&
        data.servers.map((server) => (
          <ServerIcon key={server._id} server={server} />
        ))}
    </div>
  );
};

export default ServerSelectSideMenu;
