import Login2 from "./Login2/LoginForm";
import "./home.css";
import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      {/* <div className="bg-landing-img bg-cover bg-center h-screen">
        <Login2 />
      </div> */}
      <div className="landing-page">
        <div className="overlay">
          <header className="header">
            <h1>Welcome to the Martial Arts Tournament 2024</h1>
            <p>
              Experience the ultimate showdown of skill, strength, and spirit.
            </p>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          </header>
        </div>
      </div>
    </>
  );
};
export default home;
