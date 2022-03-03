import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import LogIn from "./loginPage";
import SignUp from "./signupPage";
import Home from "./home";
import Profile from "./profile";

const Navbar = () => {
  const [openPopup, isOpen] = useState(false);
  return (
    <div>
      <div className="header">
        <ul className="nav-left">
          <li>
            <Link to={Home}>
              <img src="/eventlylogo.svg" alt="evently logo" />
            </Link>
          </li>
          <li>
            <Link to={Home}>Evently</Link>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <Link to={LogIn}>Log In</Link>
          </li>
          <li>
            <Link onClick={() => isOpen(true)} to={SignUp}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to={Profile}>
              <img src="/profilelogo.svg" alt="profile" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {/* <LogIn trigger={buttonPopup}></LogIn> */}
        <SignUp trigger={openPopup}></SignUp>
      </div>
    </div>
  );
};
export default Navbar;
