import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'rgb(35,47,62)'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          <i className="bi bi-list me-2"></i>
          <span>All</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Today's Deal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Customer Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Registry</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gift Cards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sell</a>
            </li>
          </ul>
          <span className="navbar-text text-white ms-lg-3">
            Shop Valentine's Day
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
