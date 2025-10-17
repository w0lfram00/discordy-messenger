import React from "react";
import ServerIcon from "./ServerIcon";
import s from "./ServerSelectSideMenu.module.css";
import { Srvr, SrvrPreview } from "@/lib/interfaces/api";
import { useQuery } from "@tanstack/react-query";
import { getUsersServers } from "@/lib/api/paths/users";

type Props = {};

const ServerSelectSideMenu = () => {
  const { data } = useQuery({
    queryKey: ["servers"],
    queryFn: () => getUsersServers("68eb8a252c11fa108aa34ac5"),
    staleTime: 15 * 60 * 1000,
  });

  return (
    <div className={s.serverSideMenu}>
      {data &&
        data.map((server) => <ServerIcon key={server._id} server={server} />)}
    </div>
  );
};

export default ServerSelectSideMenu;
