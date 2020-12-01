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
          <strong>{this.props.profile.bio} </strong>
          Had experience in JAVA, PHP, HTML, SQL, Visual Basic.Net and Symfony.
          Working in these company led me to use some of the skills to improve
          the technical side of the company such as building an excel worksheet
          to maintain the fees, attendance, registration, etc of a tuition
          center with over 250 students. Being a constant volunteer in Colors of
          Cambodia helped improve managing skills with people since we had to
          bring a lot of volunteers and donations from Malaysia to Cambodia to
          help the students there.
        </Row>
      </Container>
    );
  }
}
