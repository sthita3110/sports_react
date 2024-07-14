import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css"; // Make sure to update your CSS file accordingly

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Admin");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password || !selectedRole) {
      alert("Please fill in all the required fields.");
      return;
    }
    if (selectedRole === "Admin") {
      navigate("/admin");
    } else if (selectedRole === "Coach") {
      navigate("/coach");
    } else if (selectedRole === "Athlete") {
      navigate("/athlete");
    }
  };

  return (
    <div className="login-container">
      <form id="loginForm" className="login-form" onSubmit={handleLogin}>
        <p className="form-title">Login</p>
        <p className="form-subtitle">
          Please enter your login details to sign in
        </p>
        <label htmlFor="email" className="form-control">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
          />
        </label>
        <label htmlFor="password" className="form-control">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
        </label>
        <div className="role-selection">
          <label htmlFor="role" className="label-text">
            Select Role:
          </label>
          <select
            id="role"
            className="role-dropdown"
            name="role"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            aria-label="Select Role"
          >
            <option value="Admin">Admin</option>
            <option value="Coach">Participant</option>
          </select>
        </div>
        <div className="form-options">
          <label htmlFor="keepLoggedIn" className="flex items-center">
            <input
              type="checkbox"
              className="checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
              aria-label="Keep me logged in"
            />
            Keep me logged in
          </label>
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
        </div>
        <button className="login-button" type="submit">
          Log In
        </button>
        <p className="signup-prompt">
          Don't have an account?
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
