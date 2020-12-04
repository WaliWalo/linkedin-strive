import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Foot from "./components/Foot";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import { Component } from "react";
import { fetchMyProfile } from "./api/linkedinApi";
import Home from "./components/Home";
import { Spinner } from "react-bootstrap";

class App extends Component {
  state = {
    profile: {},
    loading: true,
  };

  async componentDidMount() {
    let profile = await fetchMyProfile();
    this.setState({ profile: profile, loading: false });
  }

  async componentDidUpdate(prevProp, prevState) {
    if (this.state.profile !== prevState.profile) {
      let profile = await fetchMyProfile();
      this.setState({ profile: profile, loading: false });
    }
  }
  //fboadsjfboadsfbodsafbosdjfbadsjofbosdfboafjsb
  render() {
    return (
      <div className="App">
        <Router>
          {this.state.loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <>
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
            </>
          )}
        </Router>
      </div>
    );
  }
}

export default App;
