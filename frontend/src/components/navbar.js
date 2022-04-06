import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import { useState } from "react";
import SignUp from "./signupPage.js";
import LogIn from "./loginPage.js";

const Navbar = () => {
  // const [loginPopup, loginIsOpen] = useState(false);
  const [signupPopup, openSU] = useState(false);
  const [loginPopup, openLI] = useState(false);

  return (
    <div>
      <nav className="header">
        <ul className="nav-left">
          <li>
            <Link onClick={() => {openLI(false); openSU(false)}} to="/">
              <img src="/eventlylogo.svg" alt="evently logo" />
            </Link>
          </li>
          <li>
            <Link onClick={() => {openLI(false); openSU(false)}} to="/home">Evently</Link>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <Link onClick={() => {openLI(true); openSU(false)}} to="#">
              Log In
            </Link>
          </li>
          <li>
            <Link onClick={() => {openSU(true); openLI(false)}} to="#">
              Sign Up
            </Link>
          </li>
          <li>
            <Link onClick={() => {openLI(false); openSU(false)}} to="/profile">
              <img src="/profilelogo.svg" alt="profile" />
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <SignUp trigger={signupPopup} setTrigger={openSU}></SignUp>
        <LogIn trigger={loginPopup} setTrigger={openLI}></LogIn>
      </div>
    </div>
  );
};

export default Navbar;
