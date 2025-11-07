import Navigate from "./components/Navigate";
import { getUsersInfo } from "@/lib/api/paths/users";
import { logoutUser, refreshUser } from "@/lib/api/paths/auth";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  localStorage.getItem("assessToken");

  const { data: curUser } = useQuery({
    queryKey: ["curUser"],
    queryFn: refreshUser,
    staleTime: 15 * 60 * 1000,
  });

  const { data: userData } = useQuery({
    queryKey: ["curUserData"],
    queryFn: () => {
      if (curUser) getUsersInfo(curUser?.userId);
      else logoutUser();
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!curUser,
  });

  return <Navigate path="/home" />;
}
