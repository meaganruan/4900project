import React from "react";
import "./navbar.css";
// import styled from "styled-components";
const Navbar = () => {
  return (
    <div>
      <div class="header">
        <ul class="nav-left">
          <li>
            <a href="home">
              <img src="/eventlylogo.svg" alt="evently logo" />
            </a>
          </li>
          <li>Evently</li>
        </ul>
        <ul class="nav-right">
          <li>
            <a href="loginPage.js">Log In</a>
          </li>
          <li>
            <a href="signupPage.js">Sign Up</a>
          </li>
          <li>
            <a href="Profile.js">
              <img src="/profilelogo.svg" alt="profile" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
