import React from 'react';
import amazonLogo from '../assets/images.png';

const MerchantSignup = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#232f3e' }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="bi bi-list me-2"></i>
            <span>Amazon Merchant</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Support</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <div className="row g-0 justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-sm rounded-lg border-0">
              <div className="card-body">
                <img className="mx-auto d-block mb-4" src={amazonLogo} alt="Amazon Merchant Logo" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal text-center">Amazon Merchant Sign Up</h1>

                <form>
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 py-2">Sign up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer mt-auto py-3 bg-light text-center">
        <div className="container">
          <span className="text-muted">© 2017–2024 Amazon Merchant. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default MerchantSignup;
