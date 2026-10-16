import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Project } from "./Project";
import { Routes, Route } from "react-router-dom";
import "./ContentStyle.css";
import { Nomatch } from "./Nomatch";
import { Notification } from "../Messages/Notifcation";
import { ProtectedRoute } from "../Auth/SecretRoute.jsx";
import { useContext } from "react";
import { Notpermitted } from "../Auth/Notpermitted.jsx";
import { Protected } from "../Auth/Protected.jsx";
import { Login } from "../Auth/Login.jsx";
import { Loading } from "../Effect/Loading.jsx";

export const Content = () => {
  return (
    <div className="mainContent">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/notpermitted" element={<Notpermitted />} />
        <Route element={<Protected />}>
          <Route path="/notification" element={<Notification />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/spinner" element={<Loading />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </div>
  );
};
