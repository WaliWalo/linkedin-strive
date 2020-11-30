
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Foot from "./components/Foot";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import ProfileNavBar from "./components/ProfileNavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfileNavBar />
      <Profile />
      <Foot />
    </div>
  );
}

export default App;
