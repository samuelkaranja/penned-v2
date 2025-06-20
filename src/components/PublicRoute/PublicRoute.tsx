import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../store/store";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { token } = useSelector((state: RootState) => state.auth);

  return token ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
