import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
				<div className="logo">
	        <h1>PINNACLE</h1>
					<h3>HEALTH</h3>
				</div>
      </Link>
      <div className="navbar-menu">
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span> About</span></Link>
        <Link to="/checkups"><span>Checkups</span></Link>
      </div>
    </div>
  );
};

export default Navbar;
