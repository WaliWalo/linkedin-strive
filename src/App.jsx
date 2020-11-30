/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProfileNavBar from "./components/ProfileNavBar";
import ProfileSection from "./components/ProfileSection";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ProfileNavBar />
        <Route path="/Profile" exact component={ProfileSection} />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
