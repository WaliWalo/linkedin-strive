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
import "./css/Foot.css";

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
          <Row xl={6}>
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    whiteSpace: "nowrap",
                    backgroundColor: "#F3F2EF",
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
                    whiteSpace: "nowrap",
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                    backgroundColor: "#F3F2EF",
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
                      border: "1px solid",
                      borderColor: "black",
                    }}
                  >
                    English(English)
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Inglish</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      no espanol senior
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">8====D</Dropdown.Item>
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
