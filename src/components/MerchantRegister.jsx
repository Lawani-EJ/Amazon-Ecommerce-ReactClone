import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import amazonLogo from '../assets/images.png';

const MerchantRegister = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    store_name: '',
    descp: '',
    icon: '',
    banner: '',
    phones: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      phones: formData.phones.split(',').map(phone => phone.trim())
    };
    
    axios.post('http://ecommerce.reworkstaging.name.ng/v2/merchants', data)
      .then(response => {
        console.log(response.data);
        navigate('./MerchantSignUp');
      })
      .catch(error => {
        console.error(error);
      });
  };

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
                <img className="mx-auto d-block mb-4" src={amazonLogo} alt="Amazon Merchant Logo" style={{ width: '72px', height: 'auto' }} />
                <h1 className="h3 mb-3 fw-normal text-center">Amazon Merchant Sign Up</h1>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="store_name" className="form-label">Store Name</label>
                    <input type="text" className="form-control" id="store_name" name="store_name" value={formData.store_name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="descp" className="form-label">Description</label>
                    <textarea className="form-control" id="descp" name="descp" value={formData.descp} onChange={handleChange} required></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="icon" className="form-label">Icon</label>
                    <input type="text" className="form-control" id="icon" name="icon" value={formData.icon} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="banner" className="form-label">Banner</label>
                    <input type="text" className="form-control" id="banner" name="banner" value={formData.banner} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phones" className="form-label">Additional Phones (comma separated)</label>
                    <input type="text" className="form-control" id="phones" name="phones" value={formData.phones} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
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
};

export default MerchantRegister;
