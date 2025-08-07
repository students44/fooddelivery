import React, { useState, useRef } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./LoginPopup.css";

const LoginPopup = ({ onClose }) => {
  const [loginForm, setFormType] = useState("Log in");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const formRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger swirl animation
    if (formRef.current) {
      formRef.current.classList.add("swirl-animate");

      // Remove the class after animation completes
      setTimeout(() => {
        formRef.current.classList.remove("swirl-animate");
      }, 500);
    }
    // Show alert
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);

    // Reset form fields after submission
    setName("");
    setEmail("");
    setPassword("");
    setTermsAccepted(false);
  };

  return (
    <>
      {showAlert && (
        <div className="login-popup-alert">
          {loginForm === "sign up" ? "Your account created successfully" : "Your data submit successful"}
        </div>
      )}
      <div className="login-popup">
        <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title-row">
          <h2 className="login-popup-title">
            {loginForm === "Log in"
              ? "Login to your account"
              : "Create an account"}
          </h2>
          <img
            onClick={() => onClose(false)}
            src={assets.cross_icon}
            alt="Close"
            className="login-popup-close"
          />
        </div>

        {/* ✅ Attach ref here */}
        <div className="login-popup-inputs" ref={formRef}>
          {loginForm !== "Log in" && (
            <div className="login-popup-field">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
          )}
          <div className="login-popup-field">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="login-popup-field">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="login-popup-condition">
            <input
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              id="terms"
              type="checkbox"
              required
            />
            <label htmlFor="terms">
              By continuing, I agree to the terms of use & privacy policy
            </label>
          </div>
          <button type="submit" className="login-popup-submit">
            {loginForm === "sign up" ? "Create account" : "Login"}
          </button>
          <div className="login-popup-toggle">
            {loginForm === "Log in" ? (
              <p>
                Don't have an account?{" "}
                <span onClick={() => setFormType("sign up")}>Sign up</span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setFormType("Log in")}>Login</span>
              </p>
            )}
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default LoginPopup;
