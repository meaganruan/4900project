import React from "react";
const LogIn = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form>
          <button type="submit" onClick={() => props.setTrigger(false)}>
            Log In
          </button>
        </form>
      </div>
    </div>
  ) : (
    " "
  );
};
export default LogIn;
