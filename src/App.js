import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import signUp from "./pages/signupPage";
import logIn from "./pages/loginPage";
import profile from "./pages/profile";
import "./App.css";

function App() {
  return (
    // <div className="App">
    <Router>
      <Navbar />
      {/* switch turned into routes. */}
      <Routes>
        {/* maybe use element instead of component */}
        <Route path="/loginPage" component={logIn} />
        <Route path="/signupPage" component={signUp} />
        <Route path="/profile" component={profile} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
