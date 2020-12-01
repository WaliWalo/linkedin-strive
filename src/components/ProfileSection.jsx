/** @format */

import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Dropdown,
  Card,
  Jumbotron,
  Image,
  Accordion,
  DropdownButton,
} from "react-bootstrap";
import { fetchMyProfile } from "../api/linkedinApi";
import "./css/ProfileSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEye,
  faFile,
  faPen,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

export default class ProfileSection extends Component {
  render() {
    return (
      <>
        {this.props.profile && (
          <Container
            style={{
              border: "solid 1px",
              marginTop: "3vh",
              borderRadius: "12px",
            }}
            id="profileCard"
          >
            <Row className="position-relative">
              <Jumbotron>
                <Image src="http://placehold.it/500x200" />
              </Jumbotron>
            </Row>
            <Row>
              <Col>
                <Row id="addProfileSection">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Adding Profile Section
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          Intro
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <p>
                            Hung Jin, your Intro is looking good! Check out
                            other sections you can add to your profile
                          </p>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="1"
                        >
                          About
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <p>
                            Looking good, Hung Jin This section is complete.
                          </p>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="2"
                        >
                          Featured
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <div>
                            <Dropdown.Item eventKey="1">Posts</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Articles</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Links</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Media</Dropdown.Item>
                          </div>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="3"
                        >
                          Background
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <div>
                            <Dropdown.Item eventKey="1">
                              Work experience
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">
                              Education
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">
                              Licenses & certifications
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">
                              Volunteer experience
                            </Dropdown.Item>
                          </div>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="4"
                        >
                          Skills
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                          <Dropdown.Item eventKey="1">Skills</Dropdown.Item>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="5"
                        >
                          Accomplishment
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                          <div>
                            <Dropdown.Item eventKey="1">
                              Publications
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Patents</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Courses</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Projects</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">
                              Honors & awards
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                              Test scores
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">
                              Languages
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">
                              Organizations
                            </Dropdown.Item>
                            <Dropdown.Divider />
                          </div>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="6"
                        >
                          Additional Information
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                          <Dropdown.Item eventKey="1">
                            Request a recommendation
                          </Dropdown.Item>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="7"
                        >
                          Supported Languages
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                          <Dropdown.Item eventKey="1">
                            Add profile in another language
                          </Dropdown.Item>
                        </Accordion.Collapse>
                      </Accordion>
                    </Dropdown.Menu>
                  </Dropdown>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="More..."
                    variant="light"
                    className="ml-2"
                  >
                    <Dropdown.Item href="#/action-1">
                      <FontAwesomeIcon icon={faShare} />
                      Share profile in a messsage
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <FontAwesomeIcon icon={faDownload} />
                      Save to PDF
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <FontAwesomeIcon icon={faFile} />
                      Build a resume
                    </Dropdown.Item>
                  </DropdownButton>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <Image
                        src={this.props.profile.image}
                        className="position-absolute"
                        style={{
                          zIndex: "10",

                          width: "120px",
                          height: "120px",
                          borderRadius: "100px",
                          left: "3%",
                          top: "-150%",
                        }}
                      />
                      <h3 style={{ marginLeft: "1vh " }}>
                        {this.props.profile.name} {this.props.profile.surname}
                      </h3>
                    </Row>
                    <Row style={{ marginLeft: ".1vh " }}>
                      {this.props.profile.title}
                    </Row>
                    <Row style={{ marginLeft: ".1vh " }}>
                      {this.props.profile.area}
                    </Row>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Card>
                    <Card.Body>
                      <Card.Title id="openToWork">
                        Open to work <FontAwesomeIcon icon={faPen} />
                      </Card.Title>
                      <Card.Text>
                        Bartender, Graduate Software Engineer and Information
                        Technology Graduate roles See all details
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <FontAwesomeIcon icon={faEye} />
                      Only Recruiters
                    </Card.Footer>
                  </Card>
                </Row>
              </Col>
            </Row>
          </Container>
        )}
      </>
    );
  }
}
