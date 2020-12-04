/** @format */

import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "./About";
import Activity from "./Activity";
import Dashboard from "./Dashboard";
import Experience from "./Experience";
import Featured from "./Featured";
import Interests from "./Interests";
import PeopleKnow from "./PeopleKnow";
import PeopleViewed from "./PeopleViewed";
import ProfileNavBar from "./ProfileNavBar";
import ProfileSection from "./ProfileSection";
import Questions from "./Questions";
import Skills from "./Skills";
import "./css/Profile.css";
import { fetchProfileById } from "../api/linkedinApi";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  state = {
    profile: {},
    profileId: this.props.match.params.id,
  };

  componentDidMount = async () => {
    const profile = await fetchProfileById(this.state.profileId);
    this.setState({ profile });
  };

  componentDidUpdate = async (prevProp) => {
    if (this.props.match.params.id !== prevProp.match.params.id) {
      this.setState({ profileId: this.props.match.params.id });
      const profile = await fetchProfileById(this.props.match.params.id);
      this.setState({ profile });
    }
  };

  render() {
    return (
      <div>
        <ProfileNavBar profile={this.state.profile} />
        <div className="budy">
          <Container>
            <Row>
              <Col xs={9}>
                <ProfileSection profile={this.state.profile} />
                <About profile={this.state.profile} />
                <Featured />
                <Dashboard />
                <Activity />
                <Experience profile={this.state.profile} />
                <Skills />
                <Interests />
              </Col>
              <Col xs={3}>
                <PeopleViewed />
                <PeopleKnow />
                <Questions />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
