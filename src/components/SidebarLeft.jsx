import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { faUsers, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import "./css/SidebarLeft.css";

class SidebarLeft extends Component {
  state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <div className="sidebar-left-profile">
                <div className="sidebar-left-profile-head">
                  <div className="sidebar-left-background-top"></div>
                  <div className="sidebar-left-img">
                    <img
                      src={this.props.profile.image}
                      className="contain"
                      alt=""
                      onClick={() =>
                        this.props.history.push(
                          `/profile/${this.props.profile._id}`
                        )
                      }
                    />
                  </div>
                  <p className="sidebar-left-profileName">
                    {this.props.profile.name} {this.props.profile.surname}
                  </p>
                  <p className="sidebar-left-title">
                    {this.props.profile.title}
                  </p>
                </div>
                <div className="feed-identity">
                  <button type="button" className="viewedProfile">
                    <div className="viewedProfile-text">
                      Who viewed your profile
                    </div>
                    <div className="numb">6</div>
                  </button>
                  <button type="button" className="viewedPost">
                    <div className="viewedPost-text">Views of your post</div>
                    <div className="numb">114</div>
                  </button>
                </div>

                <button type="button" className="sidebar-left-subInfo">
                  <p className="sidebar-left-info">
                    Access exclusive tools & insights
                  </p>
                  <div className="sidebar-left-sub">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      class="mercado-match"
                      width="17"
                      height="17"
                      focusable="false"
                    >
                      <path
                        d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                        fill="#f8c77e"
                      ></path>
                      <path
                        d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                        fill="#e7a33e"
                      ></path>
                    </svg>
                    <p className="premium">Reactivate Premium</p>
                  </div>
                </button>
                <div className="savedItems">
                  <button type="button" id="savedItems">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
                    </svg>
                    <p className="savedItems-text"> Saved Items</p>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="wrapper">
                <Accordion className="Accordion">
                  <Card>
                    <Card.Header className="headWrapper">
                      <Accordion.Toggle
                        variant="link"
                        eventKey="0"
                        className="accordHead"
                      >
                        Recent
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="cardBody">
                        <div>
                          <FontAwesomeIcon icon={faUsers} className="hash" />
                          <span className="itemText">
                            Entry Level Engineers
                          </span>
                        </div>

                        <div>
                          <FontAwesomeIcon icon={faHashtag} className="hash" />
                          <span className="itemText">careeropportunities</span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faHashtag} className="hash" />
                          <span className="itemText">jobpostings</span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faHashtag} className="hash" />
                          <span className="itemText">healthandsafety</span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faHashtag} className="hash" />
                          <span className="itemText">healthandsafety</span>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion className="Accordion">
                  <Card>
                    <Card.Header className="headWrapper">
                      <Accordion.Toggle
                        variant="link"
                        eventKey="1"
                        className="accordHead bluetext"
                      >
                        Groups
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="cardBody">
                        <div>
                          <FontAwesomeIcon icon={faUsers} className="hash" />
                          <span className="itemText">
                            Entry Level Engineers
                          </span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faUsers} className="hash" />
                          <span className="itemText">Nigeria Oil and Gas</span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faUsers} className="hash" />
                          <span className="itemText">
                            Process Engineers Jobs
                          </span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faUsers} className="hash" />
                          <span className="itemText">Energy Jobs</span>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion className="Accordion">
                  <Card>
                    <Card.Header className="headWrapper">
                      <Accordion.Toggle
                        variant="link"
                        eventKey="1"
                        className="accordHead bluetext"
                      >
                        Followed Hashtags
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="cardBody">
                        <div>
                          <FontAwesomeIcon icon={faHashtag} className="hash" />
                          <span className="itemText">carreeropportunities</span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faHashtag} className="hash" />
                          <span className="itemText">jobpostings</span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faHashtag} className="hash" />
                          <span className="itemText">healthandsafety</span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faHashtag} className="hash" />
                          <span className="itemText">healthandsafety</span>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <div className="savedItems bot">
                  <button type="button" id="discover">
                    <p className="savedItems-text parag"> Discover more</p>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(SidebarLeft);
