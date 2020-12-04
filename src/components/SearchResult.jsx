/** @format */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Col, Row, Container, Image } from "react-bootstrap";

class SearchResult extends Component {
  handleClick = () => {
    const closeModal = this.props.handleClose;
    closeModal();
    this.props.history.push(`/profile/${this.props.result._id}`);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={1}>
            <Image
              style={{
                marginTop: "10px",
                width: "40px",
                height: "40px",
                boxSizing: "border-box",
                backgroundClip: "content-box",

                borderRadius: "100px",
              }}
              onClick={this.handleClick}
              src={this.props.result.image}
            />
          </Col>
          <Col xs={1}>
            <div
              style={{
                marginTop: "10px",
                marginLeft: "10px",
              }}
              onClick={this.handleClick}
            >
              {this.props.result.name} &nbsp;
              {this.props.result.surname}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(SearchResult);
