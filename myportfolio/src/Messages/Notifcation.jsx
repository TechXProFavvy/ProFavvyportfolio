import { useEffect, useState } from "react";
import "../styles/Auth.css";
import { Loading } from "../Effect/Loading";
import { useLocation } from "react-router-dom";
export const Notification = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;
  useEffect(() => {});
  return <div className="notifications">You have no notifications</div>;
};
