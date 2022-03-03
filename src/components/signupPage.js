import React from "react";
import "./popups.css";

const SignUp = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close" onClick={() => this.props.setTrigger(false)}>
          X
        </button>
        <div className="popup-header">
          <img src="eventlylogo.svg" alt="evently logo" />
          <h1>Evently</h1>
        </div>
        {/* need to label form type */}
        <form className="login-signup-form">
          <label>
            name:
            <input
              type="text"
              name="name"
              placeholder="First Name Last name"
            ></input>
          </label>
          <br></br>
          <label>
            e-mail:
            <input type="email" placeholder="abdefg@example.com"></input>
          </label>
          <br></br>
          <label>
            password:
            <input type="password" placeholder="********"></input>
          </label>
          <br></br>
          <button type="submit" value="Submit">
            Register
          </button>
        </form>
      </div>
    </div>
  ) : (
    " "
  );
};
export default SignUp;
