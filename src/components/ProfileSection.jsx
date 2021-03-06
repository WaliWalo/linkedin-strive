/** @format */

import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  Card,
  Jumbotron,
  Image,
  Accordion,
  DropdownButton,
  Button,
} from "react-bootstrap";
import "./css/ProfileSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEye,
  faFile,
  faPen,
  faPencilAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import ProfileModal from "./ProfileModal";

export default class ProfileSection extends Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  componentDidUpdate(prevProp, prevState) {
    if (this.state.show !== prevState.show) {
      console.log("profile changed");
    }
  }

  render() {
    return (
      <>
        <ProfileModal
          profile={this.props.profile}
          show={this.state.show}
          onHide={this.handleClose}
        />
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
              {this.props.profile._id === this.props.myProfile._id && (
                <Button className="editPfp" onClick={this.handleShow}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
              )}

              <Image
                src={this.props.profile.image}
                className="position-absolute"
                style={{
                  zIndex: "10",
                  width: "120px",
                  height: "120px",
                  borderRadius: "100px",
                  left: "3%",
                  top: "60%",
                }}
              />

              <Jumbotron>
                <Image src="http://placehold.it/500x200" />
              </Jumbotron>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="ml-2 mt-5">
                    <Row>
                      <h3>
                        {this.props.profile.name} {this.props.profile.surname}
                      </h3>
                    </Row>
                    <Row>{this.props.profile.title}</Row>
                    <Row>{this.props.profile.area}</Row>
                  </Col>
                  <Col>
                    <Row id="addProfileSection">
                      {this.props.profile._id === this.props.myProfile._id && (
                        <Col>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="primary"
                              id="dropdown-basic"
                            >
                              Adding Profile Section
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Accordion defaultActiveKey="0">
                                <Card style={{ width: "25rem" }}>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                  >
                                    Intro
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                      Hung Jin, your Intro is looking good!
                                      Check out other sections you can add to
                                      your profile
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="1"
                                  >
                                    About
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                      Looking good, Hung Jin This section is
                                      complete.
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="2"
                                  >
                                    About
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                      Looking good, Hung Jin This section is
                                      complete.
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="3"
                                  >
                                    Featured
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                      <div>
                                        <Dropdown.Item eventKey="1">
                                          Posts
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">
                                          Articles
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">
                                          Links
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">
                                          Media
                                        </Dropdown.Item>
                                      </div>
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="4"
                                  >
                                    Background
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                      <div>
                                        <Dropdown.Item eventKey="1">
                                          Work experience
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">
                                          Education
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="3">
                                          Licenses & certifications
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">
                                          Volunteer experience
                                        </Dropdown.Item>
                                      </div>
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="5"
                                  >
                                    Skills
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="5">
                                    <Card.Body>Skills</Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="6"
                                  >
                                    Accomplishment
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="6">
                                    <Card.Body>
                                      <div>
                                        <Dropdown.Item eventKey="1">
                                          Publications
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="2">
                                          Patents
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="3">
                                          Courses
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">
                                          Projects
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="5">
                                          Honors & awards
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="6">
                                          Test scores
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="7">
                                          Languages
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="8">
                                          Organizations
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                      </div>
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="7"
                                  >
                                    Additional Information
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="7">
                                    <Card.Body>
                                      Request a recommendation
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="8"
                                  >
                                    Supported Languages
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="8">
                                    <Card.Body>
                                      Add profile in another language
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                              </Accordion>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                      )}

                      <Col>
                        <DropdownButton
                          id="dropdown-basic-button"
                          title="More..."
                          variant="light"
                          className="ml-5"
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
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Card>
                    <Card.Body>
                      <Card.Title id="openToWork">
                        Open to work{" "}
                        {this.props.profile._id ===
                          this.props.myProfile._id && (
                          <FontAwesomeIcon icon={faPen} />
                        )}
                      </Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolores dignissimos temporibus, similique itaque
                        provident, saepe quam nulla, enim perspiciatis amet cum
                        sequi ut sit vero! Distinctio nihil aliquid incidunt
                        dolorum.
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
