//import { useContext } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
//import { GlobalContext } from "../../context/context";

const accessToken = "fndjfndjnjdfncjdfbvjdfnssjnjk";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  //const { accessToken } = useContext(GlobalContext);

  return accessToken ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
