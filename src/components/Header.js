import React from 'react';
import img1 from "../assests/Image/logo.png";


function Header() {
  return (
    <div>
            <nav className="navbar bg-body-tertiary">
    <div className="container-fluid bg-1">
        <a className="navbar-brand"> <img className='pv2' src={img1}/> </a>
        <form className="d-flex fr" role="search">
        <input className="form-control me-2 bg-6" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" className="btn btn-outline-success pt" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
        <button type="button" className="btn btn-outline-success pt" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Register</button>
        </form>
    </div>
    </nav>
    </div>
  )
}

export default Header