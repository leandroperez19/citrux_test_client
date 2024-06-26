import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import WholePageLoader from "../Loaders/WholePageLoader";
import { useUser } from "@/hooks/useUser";

type PrivateRouteProps = {
    children: ReactNode
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user, userLoading } = useUser();

  if(userLoading) return <WholePageLoader />

  if (!userLoading && !user) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default PrivateRoute;
