import React from "react";
import "./navbar.css";
import {
  PiHouseFill,
  PiMagnifyingGlass,
  PiNewspaper,
  PiUser,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="nav">
      <NavLink
        to={"/"}
        className="menuButton"
      >
        <PiHouseFill />
      </NavLink>
      <NavLink to={"search"} className="menuButton">
        <PiMagnifyingGlass />
      </NavLink>
      <NavLink to={"news"} className="menuButton">
        <PiNewspaper />
      </NavLink>
      <NavLink to={"profile"} className="menuButton">
        <PiUser />
      </NavLink>
    </nav>
  );
}
