import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-contents">
          <div className="logo">
            <img src="nav-bar-image.jpg" alt="" />
          </div>
          <div className="nav-links">
            <ul>
              <li>Home</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="download-resume">
            <button>Download RESUME 📩</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
