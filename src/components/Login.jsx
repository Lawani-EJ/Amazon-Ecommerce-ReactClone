import React from 'react';
import { Link } from 'react-router-dom';
import "../css/login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import amazonLogo from '../assets/logo.png';  // Assuming you have an Amazon logo in your assets

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-login">
        <img className="mb-4" src={amazonLogo} alt="Amazon Logo" width="100" />
        <h1 className="h3 mb-3 fw-normal">Sign-In</h1>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email or mobile phone number</label>
          <input type="email" id="email" className="form-control" placeholder="Email or mobile phone number" required />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Password" required />
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">Sign-In</button>

        <p className="mt-3 mb-1 text-muted">By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>

        <div className="text-center mt-4">
          <a href="#">Forgot your password?</a>
        </div>

        <hr className="my-4" />

        <p className="text-center">New to Amazon? <Link to="/signup">Create your Amazon account</Link></p>
      </div>
    </div>
  );
};

export default Login;
