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
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/loginPage" element={<LogIn />} />
            <Route exact path="/signupPage" element={<SignUp />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </Router>
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
