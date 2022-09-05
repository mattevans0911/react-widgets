import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-wrapper">
      <NavLink className="navbar-item" activeClassName="is-active" to="/">
        Home
      </NavLink>

      <NavLink className="navbar-item" activeClassName="is-active" to="/list">
        List Widget
      </NavLink>

      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/counter"
      >
        Counter Widget
      </NavLink>

      <NavLink className="navbar-item" activeClassName="is-active" to="/color">
        Color Widget
      </NavLink>
    </div>
  );
}

export default NavBar;
