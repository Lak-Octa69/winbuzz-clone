import React from 'react';
import img1 from "../assests/Image/logo.png";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
            <nav className="navbar bg-body-tertiary">
    <div className="container-fluid bg-1">
    <Link to="/winbuzz-clone/" className='lk' > <img className='pv2' src={img1}/> </Link>
        <form className="d-flex fr" role="search">
        <Link to="/winbuzz-clone/" className='lk' >
            <button type="button" className="btn btn-outline-success pt">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                    </svg>
            </button>
        </Link>    
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