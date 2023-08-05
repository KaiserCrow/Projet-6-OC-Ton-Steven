import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <img src="/logo.png" alt="logo Kasa" id="logo" />
        </div>
        <div>
          <ul className="nav-list">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about">A Propos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
