import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "0 20px 6px",
  background: "lightseagreen",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/addshark"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add Shark Form
      </NavLink>
      <NavLink
        to="/learnandhelp"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Learn And Help
      </NavLink>
    </div>
  );
}

export default NavBar;