import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Pinnacle Health</h1>
      </Link>
      <div className="navbar-menu">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/edit"> Edit </Link>
        <Link to="/checkups"> Checkups </Link>
      </div>
    </div>
  );
};

export default Navbar;
