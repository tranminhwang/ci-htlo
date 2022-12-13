import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const PrivateRoutes = () => {
  // do something...
  let isLogin = useAuth();
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
