import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <div className="header">
        <ul className="nav-left">
          <li>
            <Link to="home.js">
              <img src="/eventlylogo.svg" alt="evently logo" />
            </Link>
          </li>
          <li>Evently</li>
        </ul>
        <ul className="nav-right">
          <li>
            <Link onClick={() => setButtonPopup(true)} to="loginPage.js">
              Log In
            </Link>
            <logIn trigger={buttonPopup}></logIn>
          </li>
          <li>
            <Link to="signupPage.js">Sign Up</Link>
          </li>
          <li>
            <Link to="Profile.js">
              <img src="/profilelogo.svg" alt="profile" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
