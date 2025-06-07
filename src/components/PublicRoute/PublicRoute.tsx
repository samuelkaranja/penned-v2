//import { useContext } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
//import { GlobalContext } from "../../context/context";

const accessToken = "fndjfndjnjdfncjdfbvjdfnssjnjk";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  //const { accessToken } = useContext(GlobalContext);

  return accessToken ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
