"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  path: string;
};

const Navigate = ({ path }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(path);
  }, []);

  return null;
};

export default Navigate;
