import React from 'react';
import { Link } from 'react-router-dom';
import "../css/signup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import amazonLogo from '../assets/logo.png';  // Assuming you have an Amazon logo in your assets

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="form-signup">
        <img className="mb-4" src={amazonLogo} alt="Amazon Logo" width="100" />
        <h1 className="h3 mb-3 fw-normal">Create account</h1>

        <div className="form-group">
          <label htmlFor="name" className="form-label">Your name</label>
          <input type="text" id="name" className="form-control" placeholder="First and last name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" placeholder="At least 6 characters" required />
          <small className="form-text text-muted">Passwords must be at least 6 characters.</small>
        </div>

        <div className="form-group">
          <label htmlFor="passwordCheck" className="form-label">Re-enter password</label>
          <input type="password" id="passwordCheck" className="form-control" placeholder="Re-enter password" required />
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">Create your Amazon account</button>

        <p className="mt-3 mb-1 text-muted">By creating an account, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>

        <hr className="my-4" />

        <p className="text-center">Already have an account? <Link to="/login">Sign-In</Link></p>
      </div>
    </div>
  );
};

export default Signup;
