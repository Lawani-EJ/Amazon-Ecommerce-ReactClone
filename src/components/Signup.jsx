import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/signup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import amazonLogo from '../assets/images.png';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://ecommerce.reworkstaging.name.ng/v2/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        navigate('/login', { state: { email, password } });
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData);
        alert(errorData.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="signup-container">
      <form className="form-signup" onSubmit={handleSignup}>
        <img className="mb-4" src={amazonLogo} alt="Amazon Logo" width="100" />
        <h1 className="h3 mb-3 fw-normal">Create account</h1>

        <div className="form-group">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input 
            type="text" 
            id="firstName" 
            className="form-control" 
            placeholder="First name" 
            required 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input 
            type="text" 
            id="lastName" 
            className="form-control" 
            placeholder="Last name" 
            required 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            placeholder="Email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            className="form-control" 
            placeholder="Phone number" 
            required 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            placeholder="At least 6 characters" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className="form-text text-muted">Passwords must be at least 6 characters.</small>
        </div>

        <div className="form-group">
          <label htmlFor="passwordCheck" className="form-label">Re-enter password</label>
          <input 
            type="password" 
            id="passwordCheck" 
            className="form-control" 
            placeholder="Re-enter password" 
            required 
            value={passwordCheck} 
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">Create your Amazon account</button>

        <p className="mt-3 mb-1 text-muted">By creating an account, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>

        <hr className="my-4" />

        <p className="text-center">Already have an account? <Link to="/login">Sign-In</Link></p>
      </form>
    </div>
  );
};

export default Signup;
