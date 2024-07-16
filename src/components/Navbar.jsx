import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Button variant="primary" onClick={handleShowOffcanvas} className='btn-warning bi-list'>
          All
        </Button>
        <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='bi bi-person-circle'>
              <Link to="/login">Hello Sign in</Link>
              </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="navbar-nav flex-column">
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
              <li className="nav-item">
                <Link to="/merchant" className="nav-link">Merchant</Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
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
            <li className="nav-item">
              <Link to="/merchant" className="nav-link">Merchant</Link>
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
