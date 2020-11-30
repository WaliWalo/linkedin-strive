import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProfileNavBar from "./components/ProfileNavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfileNavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
