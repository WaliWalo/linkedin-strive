import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class SingleComment extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={5}>
            <strong>{this.props.comment.author}: </strong>
          </Col>
          <Col xs={7}>
            <span>{this.props.comment.comment}</span>
          </Col>
        </Row>
      </Container>
    );
  }
}
