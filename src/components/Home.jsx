/** @format */

import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainFeed from "./MainFeed";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container className="mt-3">
          <Row>
            <Col xs={3}>
              <SidebarLeft profile={this.props.profile} />
            </Col>
            <Col xs={6}>
              <MainFeed profile={this.props.profile} />
            </Col>
            <Col xs={3}>
              <SidebarRight />
              
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
