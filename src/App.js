import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/loginPage";
import SignUp from "./components/signupPage";
import Profile from "./components/profile";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/home" element={Home} />
          <Route path="/loginPage" element={LogIn} />
          <Route path="/signupPage" element={SignUp} />
          <Route path="/profile" element={Profile} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
