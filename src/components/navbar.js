import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <img src="eventlylogo.svg" alt="evently logo" />
          </li>
          <li>Evently</li>
          <li>
            <Link to="loginPage.js">Log In</Link>
          </li>
          <li>
            <Link to="signupPage.js">Sign Up</Link>
          </li>
          <li>
            <Link to="Profile.js">
              <img src="profilelogo.svg" alt="profile" />
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default navbar;
