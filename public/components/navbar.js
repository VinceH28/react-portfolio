import React from "react";
import { Link, location} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

function Navbar() {
  const currentPage = location();
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light d-flex justify-content-between">
        <Link id="Creator" className="navbar-brand" to="/"> 
          Vince Hart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="far fa-gem"></i>
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>

        <nav className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className={currentPage.pathname === "/About" ? "nav-link active" : "nav-link"} to="/About">
              Home <nav className="sr-only">(current)</nav>
            </Link>
            <Link className={currentPage.pathname === "/Contact" ? "nav-link active" : "nav-link"} to="/Contact">
              Contact
            </Link>
            <Link className={currentPage.pathname === "/Portfolio" ? "nav-link active" : "nav-link"} to="/Portfolio">
              Portfolio
            </Link>
          </div>
        </nav>
      </nav>
    </div>
  );
}
export default Navbar;