/** @format */

import React, { Component } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Dumpster.css";
export default class SingleExperience extends Component {
  handleOnClick = () => {
    const handleRemove = this.props.handleRemove;
    handleRemove(this.props.profileId, this.props.experience._id);
  };
  render() {
    return (
      <div>
        <ListGroup.Item>
          <Container>
            <Row>
              <Col xs={2}>{this.props.experience.image}</Col>
              <Col xs={8}>
                <Row>{this.props.experience.role}</Row>
                <Row>{this.props.experience.company}</Row>
                <Row>
                  {this.props.experience.startDate.slice(0, 7)}&nbsp; &nbsp;
                  {this.props.experience.endDate.slice(0, 7)}
                </Row>
                <Row>{this.props.experience.area}</Row>
              </Col>
              <Col xs={2}>
                <FontAwesomeIcon
                  className="yeet"
                  onClick={this.handleOnClick}
                  icon={faDumpsterFire}
                />
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      </div>
    );
  }
}
