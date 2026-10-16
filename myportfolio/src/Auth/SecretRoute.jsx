import { react, useState } from "react";
import { createContext } from "react";
import { Navigate } from "react-router-dom";
import { Notpermitted } from "./Notpermitted";

export const ProtectedRoute = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState("Guest");
  return (
    <ProtectedRoute.Provider value={{ user, setUser }}>
      { children }
    </ProtectedRoute.Provider>
  );
}
