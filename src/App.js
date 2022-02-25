import logo from "./eventlylogo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navigation">
          <li>
            <img src="eventlylogo.svg" alt="evently logo" />
          </li>
          <li className="Evently">Evently</li>
          <li>
            <u>
              <a href="#loginpage">Log In</a>
            </u>
          </li>
          <li>
            <u>
              <a href="#signuppage">Sign Up</a>
            </u>
          </li>
          <li>
            <a href="profilePage.js">
              <img src="profilelogo.svg" alt="profile" />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
