import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
