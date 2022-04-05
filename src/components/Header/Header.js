import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="  navbar navbar-expand-lg navbar-dark bg-dark mt-0 position-absolute top-0 w-100">
  <div className="container-fluid container">
    <a href="#"><img className='navbarLogo' src="https://thumbs.dreamstime.com/b/trade-symbol-ways-arrow-laptop-logo-designs-vector-design-171844391.jpg" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
        <Link  className="nav-link" to="/reviews">Reviews</Link>
        <Link  className="nav-link" to="/dashboard">Dashboard</Link>
        <Link  className="nav-link" to="/blogs">Blogs</Link>  
        <Link  className="nav-link" to="/about">About</Link>

      </div>
    </div>
  </div>
</nav>
    )
  
};


export default Header;