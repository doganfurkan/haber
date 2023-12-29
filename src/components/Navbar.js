import React from "react";
import "./navbar.css"
import { PiHouseFill, PiMagnifyingGlass, PiNewspaper,PiUser } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav id="nav">
      <button className="menuButton" onClick={() => {document.getElementById("feed").scrollTo(0,0)}}><PiHouseFill/></button>
      <button className="menuButton"><PiMagnifyingGlass/></button>
      <button className="menuButton"><PiNewspaper/></button>
      <button className="menuButton"><PiUser/></button>
    </nav>
  );
}
