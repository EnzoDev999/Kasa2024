import React from "react";
import "../sass/components/Header.scss";

import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.png";

const Header = () => {
  return (
    <header className="headerContainer">
      {" "}
      <img className="logo" src={Logo} alt="Kasa logo" />{" "}
      <ul className="navigation">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "accueil_navbar active" : "accueil_navbar"
            }
          >
            Accueil {/*text du lien souhaité*/}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "about_navbar active" : "about_navbar"
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
