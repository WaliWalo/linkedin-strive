import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Foot from "./components/Foot";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import ProfileSection from "./components/ProfileSection";
import { Component } from "react";
import { fetchMyProfile } from "./api/linkedinApi";

class App extends Component {
  state = {
    profile: {},
  };

  async componentDidMount() {
    let profile = await fetchMyProfile();
    this.setState({ profile: profile });
  }
  //fboadsjfboadsfbodsafbosdjfbadsjofbosdfboafjsb
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar profile={this.state.profile} />
          <Route
            path="/Profile"
            exact
            render={(props) => (
              <ProfileSection {...props} profile={this.state.profile} />
            )}
          />
          <Profile profile={this.state.profile} />
          <Foot />
        </Router>
      </div>
    );
  }
}

export default App;
