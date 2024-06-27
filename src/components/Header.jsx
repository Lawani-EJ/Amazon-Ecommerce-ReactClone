import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import amazonLogo from '../assets/logo.png';  
import usFlag from '../assets/usflag.jpg';  

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={amazonLogo} alt="Logo" className="img-fluid" style={{ width: '100px' }} />
        </a>
        <div className="d-flex align-items-center text-white me-4">
          <i className="bi bi-geo-alt-fill me-2"></i>
          <div>
            <span className="d-block">Deliver to</span>
            <span className="fw-bold">Nigeria</span>
          </div>
        </div>
        <form className="d-flex flex-grow-1 mx-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
            </div>
            <input type="text" className="form-control" placeholder="Search..." />
            <button className="btn btn-warning">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
        <div className="d-flex align-items-center text-white">
          <img src={usFlag} alt="Language" className="img-fluid me-2" style={{ width: '35px', height: '35px' }} />
          <i className="bi bi-caret-down-fill me-3"></i>
          <div className="me-3">
            <span className="d-block">Hello, Sign in</span>
            <div className="d-flex align-items-center">
              <span>Accounts & Lists</span>
              <i className="bi bi-caret-down-fill"></i>
            </div>
          </div>
          <div className="me-3">
            <span className="d-block">Returns</span>
            <span>& Orders</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-cart-plus"></i>
            <span className="ms-2">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
