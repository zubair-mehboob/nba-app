import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand ">Zubair</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
