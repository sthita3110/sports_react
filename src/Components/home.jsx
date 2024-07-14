import "./home.css";
import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      <div className="landing-page">
        <div className="overlay">
          <header className="header">
            <h1>Welcome to the Martial Arts Tournament 2024</h1>
            <p>
              Experience the ultimate showdown of skill, strength, and spirit.
            </p>
            <Link to="/signup">
              <button className="login-button font-bold">Register Now</button>
            </Link>
          </header>
        </div>
      </div>
    </>
  );
};
export default home;
