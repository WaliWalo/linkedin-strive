import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Foot from "./components/Foot";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import { Component } from "react";
import { fetchMyProfile } from "./api/linkedinApi";
import Home from "./components/Home";

class App extends Component {
  state = {
    profile: {},
  };

  async componentDidMount() {
    let profile = await fetchMyProfile();
    this.setState({ profile: profile });
  }

  async componentDidUpdate(prevProp, prevState) {
    if (this.state.profile !== prevState.profile) {
      let profile = await fetchMyProfile();
      this.setState({ profile: profile });
    }
  }
  //fboadsjfboadsfbodsafbosdjfbadsjofbosdfboafjsb
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar profile={this.state.profile} />

          <Route
            path="/profile/:id"
            render={() => <Profile profile={this.state.profile} />}
          />
          <Route
            path="/"
            exact
            render={(props) => <Home profile={this.state.profile} />}
          />
          <Foot />
        </Router>
      </div>
    );
  }
}

export default App;
