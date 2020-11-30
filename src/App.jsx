import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import ProfileNavBar from "./components/ProfileNavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfileNavBar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
