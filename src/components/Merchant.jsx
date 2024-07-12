import React from 'react';
import { Link } from 'react-router-dom';
import merchantImg from '../assets/merchant.gif';

const Merchant = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#232f3e' }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-list me-2"></i>
            <span>Amazon Merchant</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Explore</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Sell</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Support</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Your Gateway to Success</h1>
            <p className="lead">Empower your business with Amazon's robust platform. Expand your reach, engage with customers, and watch your sales soar.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <Link to="/merchantsignup" className="btn btn-warning btn-lg px-4 me-md-2 fw-bold">Start Selling</Link>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn More</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={merchantImg} alt="" width="720" />
          </div>
        </div>
      </div>

      <div className="px-4 py-5 my-5 text-center bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold text-body-emphasis">Sign Up or Sign In</h1>
          <p className="lead mb-4">Join Amazon Merchant today. Start selling your products to millions of customers worldwide.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/merchantsignup" className="btn btn-warning btn-lg px-4 gap-3">Sign Up</Link>
            <button type="button" className="btn btn-outline-success btn-lg px-4">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merchant;
