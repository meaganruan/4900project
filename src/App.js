import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/loginPage";
import SignUp from "./components/signupPage";
import Profile from "./components/profile";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" component={<Home />} />
            <Route path="/home" component={<Home />} />
            <Route path="/loginPage" component={<LogIn />} />
            <Route path="/signupPage" component={<SignUp />} />
            <Route path="/profile" component={<Profile />} />
          </Routes>
        </Router>
      </div>
      <Home />
    </div>
  );
}

export default App;
