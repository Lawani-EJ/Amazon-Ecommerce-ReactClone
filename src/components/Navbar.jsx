import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'rgb(35,47,62)'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="container">
        <div className="second d-flex align-items-center">
          <div className="second-1 me-3">
            <a className="navbar-brand d-flex align-items-center text-white" href="#">
              <i className="bi bi-list me-2"></i>
              <span>All</span>
            </a>
          </div>
          <div className="second-2 me-auto">
            <ul className="navbar-nav">
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
          </div>
          <div className="second-3">
            <span className="text-white">Shop Valentine's Day</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
