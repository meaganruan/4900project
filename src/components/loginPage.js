import React from "react";
import "./popups.css";

const LogIn = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <img src="eventlylogo.svg" alt="evently logo" />
        <h1>Evently</h1>
        <button onClick={() => props.setTrigger(false)}>X</button>
        <form>
          <button type="submit" onClick={() => props.setTrigger(false)}>
            Log In
          </button>
        </form>
        {props.children}
      </div>
    </div>
  ) : (
    " "
  );
};
export default LogIn;
