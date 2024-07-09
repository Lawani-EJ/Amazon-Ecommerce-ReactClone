import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col-12">
            <div className="backtop py-2" style={{ cursor: 'pointer' }}>Back to Top</div>
          </div>
        </div>
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Careers</a></li>
              <li><a href="#" className="text-white">Blogs</a></li>
              <li><a href="#" className="text-white">About Amazon</a></li>
              <li><a href="#" className="text-white">Investor Relations</a></li>
              <li><a href="#" className="text-white">Amazon Devices</a></li>
              <li><a href="#" className="text-white">Amazon Science</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5>Make Money with Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Sell Products on Amazon</a></li>
              <li><a href="#" className="text-white">Sell on Amazon Business</a></li>
              <li><a href="#" className="text-white">Sell Apps on Amazon</a></li>
              <li><a href="#" className="text-white">Become an Affiliate</a></li>
              <li><a href="#" className="text-white">Advertise Your Products</a></li>
              <li><a href="#" className="text-white">Host an Amazon Hub</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5>Amazon Payment Products</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Amazon Business Cards</a></li>
              <li><a href="#" className="text-white">Shop with Points</a></li>
              <li><a href="#" className="text-white">Reload Your Balance</a></li>
              <li><a href="#" className="text-white">Amazon Currency Converter</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5>Let Us Help You</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Amazon and COVID-19</a></li>
              <li><a href="#" className="text-white">Your Account</a></li>
              <li><a href="#" className="text-white">Your Orders</a></li>
              <li><a href="#" className="text-white">Shipping Rates and Policies</a></li>
              <li><a href="#" className="text-white">Returns and Replacements</a></li>
              <li><a href="#" className="text-white">Manage Your Content & Devices</a></li>
              <li><a href="#" className="text-white">Amazon Assistant</a></li>
              <li><a href="#" className="text-white">Help</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr className="bg-secondary" />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
