import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxForTypeScript";

interface Props {
  children: React.ReactNode;
  redirectTo?: string;
}

const RestrictedRoute = ({ children, redirectTo = "/" }: Props) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
