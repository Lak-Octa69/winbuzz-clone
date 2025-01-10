import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from "../assests/Image/logo.png";
function Header() {
  return (
    <div>
            <nav className="navbar bg-body-tertiary">
    <div className="container-fluid bg-1">
        <a className="navbar-brand"> <img src={img1}/> </a>
        <form className="d-flex fr" role="search">
        <input className="form-control me-2 bg-6" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success pt">Login</button> 
        <button className="btn btn-outline-success pt">Register</button>

        </form>
    </div>
    </nav>
    </div>
  )
}

export default Header