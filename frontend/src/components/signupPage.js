import React from "react";
import "./styles/popups.css";

const handleSignup = () => {
  alert("A name was submitted: " + this.state.value);
}
const SignUp = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <div className="popup-header">
          <img src="eventlylogo.svg" alt="evently logo" />
          <h1>Evently</h1>
        </div>
        {/* need to label form type */}
        <form onSubmit={handleSignup} className="login-signup-form">
          <div className="inputs">
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="First Name Last name"
            ></input>
          </div>
          <div className="inputs">
            <label for="email">E-mail:</label>
            <input type="email" placeholder="abdefg@example.com"></input>
          </div>
          <div className="inputs">
            <label for="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="********"
            ></input>
          </div>
          <button type="submit" value="Submit">
            Register
          </button>
        </form>
        {/* {props.children} */}
      </div>
    </div>
  ) : (
    " "
  );
};
export default SignUp;
