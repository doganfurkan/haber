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
      <div id="navLogo">
        haber<span>ci</span>
      </div>
      <div id="navContainer">
        <NavLink to={"/"} className="menuButton">
          {({ isActive }) =>
            isActive ? (
              <>
                <PiHouseFill />
                <p>Anasayfa</p>
              </>
            ) : (
              <>
                <PiHouse />
                <p>Anasayfa</p>
              </>
            )
          }
        </NavLink>
        <NavLink to={"search"} className="menuButton">
          {({ isActive }) =>
            isActive ? (
              <>
                <PiMagnifyingGlassFill />
                <p>Arama</p>
              </>
            ) : (
              <>
                <PiMagnifyingGlass />
                <p>Arama</p>
              </>
            )
          }
        </NavLink>
        <NavLink to={"news"} className="menuButton">
          {({ isActive }) =>
            isActive ? (
              <>
                <PiNewspaperFill />
                <p>Tüm Haberler</p>
              </>
            ) : (
              <>
                <PiNewspaper />
                <p>Tüm Haberler</p>
              </>
            )
          }
        </NavLink>
        <NavLink to={"profile"} className="menuButton">
          {({ isActive }) =>
            isActive ? (
              <>
                <PiUserFill />
                <p>Profil</p>
              </>
            ) : (
              <>
                <PiUser />
                <p>Profil</p>
              </>
            )
          }
        </NavLink>
      </div>
    </nav>
  );
}
