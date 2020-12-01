/** @format */

import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  ListGroup,
  Image,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default class Foot extends Component {
  render() {
    return (
      <>
        <Container className="mt-5">
          <Dropdown.Divider className="mb-0" />
          <Image
            src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png"
            style={{ width: "100px" }}
          />
          <Row>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",

                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  About
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",

                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                  }}
                >
                  Community GuideLines
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",
                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Privacy & Terms
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",
                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Sales Solutions
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",
                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Safety Center
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",
                    color: "grey",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    whiteSpace: "nowrap",
                  }}
                >
                  LinkedIn Corporation ©2020
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",

                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Accessibility
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",

                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Careers
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",
                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Ad Choices
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",
                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Mobile
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",

                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Talent Solutions
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",

                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Marketing Solutions
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",
                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Advertising
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",
                    color: "#56687A",
                    fontSize: ".8rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  Small Business
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",

                    color: "#56687A",
                    fontSize: ".9rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                  }}
                >
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  Questions?
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    marginLeft: "30px",
                    margingTop: "0",
                    paddingTop: "0",
                    color: "#56687A",
                    fontSize: ".7rem",
                    lineHeight: "1.33333",
                  }}
                >
                  Visit our Help Center
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margin: "0",

                    color: "#56687A",
                    fontSize: ".9rem",
                    lineHeight: "1.33333",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                  }}
                >
                  <FontAwesomeIcon icon={faCog} />
                  Manage your account and privacy
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    border: "none",
                    margingTop: "0",
                    marginLeft: "30px",
                    paddingTop: "0",
                    color: "#56687A",
                    fontSize: ".7rem",
                    lineHeight: "1.33333",
                  }}
                >
                  Go to your Settings
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item
                  className="mb-0"
                  style={{
                    border: "none",
                    margingBottom: "0",

                    paddingBottom: "0",
                    color: "#56687A",
                    fontSize: ".7rem",
                    lineHeight: "1.33333",
                  }}
                >
                  Select Language
                </ListGroup.Item>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      width: "250px",
                      fontSize: "1rem",
                      lineHeight: "1.33333",
                      color: "#56687A",
                      backgroundColor: "transparent",
                      borderColor: "#56687A",
                    }}
                  >
                    English(English)
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
