import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import LogIn from "./loginPage";
import SignUp from "./signupPage";
import Home from "./home";

const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <div className="header">
        <ul className="nav-left">
          <li>
            <Link to="home">
              <img src="/eventlylogo.svg" alt="evently logo" />
            </Link>
          </li>
          <li>
            <Link to="home">Evently</Link>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <Link to="loginPage">Log In</Link>
          </li>
          <li>
            <Link onClick={() => setButtonPopup(true)} to="signupPage">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="Profile">
              <img src="/profilelogo.svg" alt="profile" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {/* <LogIn trigger={buttonPopup}></LogIn> */}
        <SignUp trigger={buttonPopup}></SignUp>
      </div>
    </div>
  );
};
export default Navbar;
