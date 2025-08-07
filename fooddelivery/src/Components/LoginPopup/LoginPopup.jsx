import React, { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import './LoginPopup.css'; // Assuming you have a CSS file for styling

const LoginPopup = ({onClose }) => {

    // state to handle login form 
    const [loginForm,  setFormType] = useState("Log in");
    
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title-row">
          <h2 className="login-popup-title">{loginForm === "Log in" ? "Login to your account" : "Create an account"}</h2>
          <img onClick={() => onClose (false)} src={assets.cross_icon} alt="Close" className="login-popup-close" />
        </div>
        <div className='login-popup-inputs'>
          {loginForm !== "Log in" && (
            <div className="login-popup-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder='Your name' required />
            </div>
          )}
          <div className="login-popup-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder='Enter your email' required />
          </div>
          <div className="login-popup-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder='Enter your password' required />
          </div>
          <div className="login-popup-condition">
            <input id="terms" type="checkbox" required />
            <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy</label>
          </div>
          <button type='submit' className="login-popup-submit">
            {loginForm === "sign up" ? "Create account" : "Login"}
          </button>
          <div className="login-popup-toggle">
            {loginForm === "Log in" ? (
              <p>Don't have an account? <span onClick={() => setFormType("sign up")}>Sign up</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setFormType("Log in")}>Login</span></p>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
