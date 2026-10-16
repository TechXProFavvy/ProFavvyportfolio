import { useContext } from "react";
import { ProtectedRoute } from "./SecretRoute";
import { Notpermitted } from "./Notpermitted";
import { Outlet } from "react-router-dom";

export const Protected = () => {
  const { user } = useContext(ProtectedRoute);
  return user === "Guest" ? <Notpermitted /> : <Outlet />;
};
