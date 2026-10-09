import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Project } from "./Project";
import { Routes, Route } from "react-router-dom";
import "./ContentStyle.css";
import { Nomatch } from "./Nomatch";

export const Content = () => {
  return (
    <div className="mainContent">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
        <Route path="*" element={<Nomatch/>}/>
      </Routes>
    </div>
  );
};
