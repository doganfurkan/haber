import React from "react";
import "./navbar.css";
import {
  PiHouseFill,
  PiHouse,
  PiMagnifyingGlass,
  PiMagnifyingGlassFill,
  PiNewspaper,
  PiUser,
  PiNewspaperFill,
  PiUserFill,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="nav">
      <NavLink to={"/"} className="menuButton">
        {({ isActive }) => (
          isActive ? <PiHouseFill/> : <PiHouse/>
        )}
      </NavLink>
      <NavLink to={"search"} className="menuButton">
      {({ isActive }) => (
          isActive ? <PiMagnifyingGlassFill/> : <PiMagnifyingGlass/>
        )}
      </NavLink>
      <NavLink to={"news"} className="menuButton">
      {({ isActive }) => (
          isActive ? <PiNewspaperFill/> : <PiNewspaper/>
        )}
      </NavLink>
      <NavLink to={"profile"} className="menuButton">
      {({ isActive }) => (
          isActive ? <PiUserFill/> : <PiUser/>
        )}
      </NavLink>
    </nav>
  );
}
