/** @format */

import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./css/About.css";
export default class About extends Component {
  render() {
    return (
      <Container className="mt-3" id="aboutCard">
        <Row className="mb-2" id="aboutTitle">
          <div>
            <h3>About</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faPen} />
          </div>
        </Row>
        <Row>
          <span>{this.props.profile.bio} </span>
        </Row>
      </Container>
    );
  }
}
