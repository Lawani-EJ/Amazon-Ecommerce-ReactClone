import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../css/login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import amazonLogo from '../assets/images.png';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState(location.state?.password || "");

  async function login(event) {
    event.preventDefault();  
    const item = { email, password };
    try {
      const result = await fetch("http://ecommerce.reworkstaging.name.ng/v2/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      });
      const data = await result.json();
      if (result.ok && data.id) { // Assuming the presence of user information indicates success
        localStorage.setItem("User-Information", JSON.stringify(data));
        navigate('/');
      } else {
        console.error('Login failed:', data);
        alert('Login failed: ' + (data.message || 'unknown error'));
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="login-container">
      <div className="form-login">
        <img className="mb-4" src={amazonLogo} alt="Amazon Logo" width="100" />
        <h1 className="h3 mb-3 fw-normal">Sign-In</h1>
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email or mobile phone number</label>
            <input 
              type="email" 
              id="email" 
              onChange={(e) => setEmail(e.target.value)} 
              className="form-control" 
              placeholder="Email or mobile phone number" 
              required 
              value={email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              id="password" 
              onChange={(e) => setPassword(e.target.value)} 
              className="form-control" 
              placeholder="Password" 
              required 
              value={password}
            />
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">Sign-In</button>
        </form>

        <p className="mt-3 mb-1 text-muted">
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </p>

        <div className="text-center mt-4">
          <a href="#">Forgot your password?</a>
        </div>

        <hr className="my-4" />

        <p className="text-center">
          New to Amazon? <Link to="/signup">Create your Amazon account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
