import React from "react";
import { NavLink } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import "../styles/Navbar.css";
import { MdDoorbell, MdNotificationAdd, MdNotifications } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="Navbar">
      <header>
        <nav className="logo">
          <div className="frame"><p>{"<ProFavvy/>"}</p></div>
        </nav>
      <nav className="link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact" className="no-mobi">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/notification"><MdNotifications size={"20px"}/></NavLink>
        </nav>
        </header>
    </div>
  );
}