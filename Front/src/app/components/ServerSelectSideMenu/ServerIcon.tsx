import React from "react";
import s from "./ServerSelectSideMenu.module.css";
import { Srvr, SrvrPreview } from "@/lib/interfaces/api";

interface Props {
  server: SrvrPreview;
}

const ServerIcon = ({ server }: Props) => {
  if ((server.img = "no-image"))
    server.img =
      "https://media.discordapp.net/attachments/812792334554628137/930852388376567858/unknown.png?ex=68f30f97&is=68f1be17&hm=7f25c61fc371af4568ba61534909fcd47b1dbefa18e097316107f4d012141b05&=&format=webp&quality=lossless&width=827&height=865";

  return (
    <a className={s.serverIcon}>
      <img src={server.img} alt={server.name} />
    </a>
  );
};

export default ServerIcon;
