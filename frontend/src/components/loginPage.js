import React from "react";
import "./styles/popups.css";
import { useState } from "react";
import SignUp from "./signupPage";

const handleLogin = () => {

}
const LogIn = (props) => {
  const [signupPopup, openSU] = useState(false);
  return props.trigger ? (
    <div className="popup">
      <SignUp trigger={signupPopup} setTrigger={openSU}></SignUp>
      <div className="popup-inner">
        <button className="close" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <div className="popup-header">
          <img src="eventlylogo.svg" alt="evently logo" />
          <h1>Evently</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="inputs">
            <input type="email" placeholder="abdefg@example.com"></input>
          </div>
          <div className="inputs">
            <input type="password" placeholder="*******"></input>
          </div>
          <button type="submit" onClick={() => props.setTrigger(false)}>
            Log In
          </button>
        </form>
        <div className="register">
          <p>
            No account? Register{" "}
            <a href="./" onClick={() => openSU(true)}>
              here!
            </a>
          </p>
        </div>
      </div>
    </div>
  ) : (
    " "
  );
};
export default LogIn;
