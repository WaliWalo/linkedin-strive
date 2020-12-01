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


export default class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileNavBar profile={this.props.profile} />
        <div className="budy">
          <Container>
            <Row>
              <Col xs={9}>
                <ProfileSection profile={this.props.profile} />
                <About profile={this.props.profile} />
                <Featured />
                <Dashboard />
                <Activity />
                <Experience profile={this.props.profile} />
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
