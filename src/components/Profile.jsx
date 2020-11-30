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
import ProfileSection from "./ProfileSection";
import Questions from "./Questions";
import Skills from "./Skills";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="9">
              <ProfileSection />
              <About />
              <Featured />
              <Dashboard />
              <Activity />
              <Experience />
              <Skills />
              <Interests />
            </Col>
            <Col xs="3">
              <PeopleViewed />
              <PeopleKnow />
              <Questions />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
