import React from 'react';  
import Hero from './Hero';
import Facilities from './Facilities';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">LMS<p>Cloud Based Library Pass</p></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/librarypass">Library Pass</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/bookissue">Book Issue</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </>
  )
}


