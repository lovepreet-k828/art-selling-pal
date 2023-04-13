import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

function MainNav() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:"white", paddingRight:"2%"}} >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "50px" }}>
        <li className="nav-item">
          <Link to="/" style={{ textDecoration: "none" }}><span className="h5 nav-link active font-weight-bold" aria-current="page">Home</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/categories" style={{ textDecoration: "none", color:"black", zIndex:"2" }}><span className="h5 nav-link font-weight-bold">Market</span></Link>
        </li>

        <li className="nav-item">
          <Link to="/aboutUs" style={{ textDecoration: "none" }}>
            <span className="h5 nav-link font-weight-bold text-decoration-none">About us</span>
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default MainNav