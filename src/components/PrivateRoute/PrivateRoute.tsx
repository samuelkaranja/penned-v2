import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../store/store";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { token } = useSelector((state: RootState) => state.auth);

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
