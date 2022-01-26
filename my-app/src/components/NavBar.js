import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "15px",
  margin: "0 20px 6px",
  borderRadius: "2%",
  background: "lightseagreen",
  textDecoration: "none",
  color: "azure",
};

function NavBar() {
  return (
    <div id="navBar">
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
        Add a Shark
      </NavLink>
      <NavLink
        to="/learnandhelp"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Learn and Help
      </NavLink>
    </div>
  );
}

export default NavBar;