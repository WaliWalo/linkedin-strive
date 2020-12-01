import React, { Component } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";

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
                  {this.props.experience.startDate.slice(0, 7)}-
                  {this.props.experience.endDate.slice(0, 7)}
                </Row>
                <Row>{this.props.experience.area}</Row>
              </Col>
              <Col xs={2}>
                <Button onClick={this.handleOnClick}>Remove</Button>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      </div>
    );
  }
}
