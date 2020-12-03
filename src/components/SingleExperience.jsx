/** @format */

import React, { Component } from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { faDumpsterFire, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Dumpster.css";
export default class SingleExperience extends Component {
  handleOnClick = () => {
    const handleRemove = this.props.handleRemove;
    handleRemove(this.props.profileId, this.props.experience._id);
  };

  handleOnClickEdit = () => {
    let showModal = this.props.showModal;
    let handleEdit = this.props.handleEdit;
    let sendExpId = this.props.getExp;
    showModal();
    handleEdit();
    sendExpId(this.props.experience);
  };
  render() {
    return (
      <div>
        <ListGroup.Item>
          <Container>
            <Row>
              <Col xs={2} className="pl-0">
                <Image
                  src={this.props.experience.image}
                  style={{ width: "100px", height: "100px" }}
                />
              </Col>
              <Col xs={8} className="ml-1">
                <Row>{this.props.experience.role}</Row>
                <Row>{this.props.experience.company}</Row>
                <Row>
                  {this.props.experience.startDate.slice(0, 7)}&nbsp; &nbsp;
                  {this.props.experience.endDate.slice(0, 7)}
                </Row>
                <Row>{this.props.experience.area}</Row>
              </Col>
              <Col xs={1}>
                <FontAwesomeIcon
                  className="yeet"
                  onClick={this.handleOnClickEdit}
                  icon={faPen}
                />
                &nbsp; &nbsp;
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
