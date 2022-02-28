import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <div>
      <div class="header">
        <ul class="nav-left">
          <li>
            <Link to="home">
              <img src="/eventlylogo.svg" alt="evently logo" />
            </Link>
          </li>
          <li>Evently</li>
        </ul>
        <ul class="nav-right">
          <li>
            <Link to="loginPage.js">Log In</Link>
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
