import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  // do something...
  let isLogin = useAuth();
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
