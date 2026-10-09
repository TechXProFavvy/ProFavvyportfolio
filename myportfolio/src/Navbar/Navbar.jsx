import React from "react";
import { NavLink } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import "../styles/Navbar.css";

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
        </nav>
        </header>
    </div>
  );
}