/** @format */

import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Navbar,
  Image,
  Nav,
  Button,
  Container,
  Form,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHome,
  faUserFriends,
  faCommentDots,
  faBell,
  faTh,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { fetchMyProfile } from "../api/linkedinApi";

const NavBar = (props) => {
  // const { location } = props;
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const friendsIcon = <FontAwesomeIcon icon={faUserFriends} />;
  const briefcase = <FontAwesomeIcon icon={faBriefcase} />;
  const messages = <FontAwesomeIcon icon={faCommentDots} />;
  const bell = <FontAwesomeIcon icon={faBell} />;
  const th = <FontAwesomeIcon icon={faTh} />;
  // const learn = <FontAwesomeIcon icon={faHome} />;

  const [profile, setProfile] = useState({});

  useEffect(() => {
    try {
      async function fetchData() {
        let _profile = await fetchMyProfile();
        if (profile._id !== _profile._id) {
          setProfile(_profile);
        }
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [profile]);

  return (
    <>
      {profile && (
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          style={{ height: "6vh", backgroundColor: "#fff", zIndex: "1000" }}
        >
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://image.flaticon.com/icons/png/512/174/174857.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>

            <Form className="d-inline-block position-relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="position-absolute"
                style={{
                  left: "5px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <FormControl
                type="search"
                placeholder="  search"
                className="mr-sm-2"
              />
            </Form>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav style={{ marginTop: "2vh" }}>
                <Nav.Link href="#features">
                  {homeIcon}
                  <br></br>Start
                </Nav.Link>
                <Nav.Link href="#pricing">
                  {friendsIcon}
                  <br></br>Network
                </Nav.Link>
                <Nav.Link href="#deets">
                  {briefcase}
                  <br></br>Jobs
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  {messages}
                  <br></br>Messages
                </Nav.Link>
                <Nav.Link eventKey={3} href="#memes">
                  {bell}
                  <br></br>Notifications
                </Nav.Link>

                <NavDropdown
                  title={
                    <div>
                      <Image
                        src={profile.image}
                        style={{
                          width: "20px",
                          height: "20px",
                          boxSizing: "border-box",
                          marginLeft: "8px",
                          backgroundClip: "content-box",

                          borderRadius: "100px",
                          marginRight: "4px",
                        }}
                      />
                      <br></br>
                      Me
                    </div>
                  }
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    style={{ backgroundColor: "transparent" }}
                  >
                    {" "}
                    <Link
                      to="/Profile"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <div>
                        <Image
                          src={profile.image}
                          style={{
                            width: "40px",
                            height: "40px",
                            boxSizing: "border-box",
                            backgroundClip: "content-box",

                            borderRadius: "100px",
                            marginRight: "4px",
                          }}
                        />
                        {profile.name} &nbsp; {profile.surname}
                        <br></br>
                        <div
                          style={{
                            marginLeft: "4.3vh",
                            textDecoration: "none",
                          }}
                        >
                          {profile.title}
                        </div>
                      </div>
                      <Button
                        variant="outline-primary"
                        style={{
                          fontWeight: "600",
                          textAlign: "center",
                          height: "2vh",
                          width: "25vh",
                          borderRadius: "100px",
                          fontSize: "12px",
                          padding: "0px",
                        }}
                      >
                        Show Profile
                      </Button>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h6 style={{ fontWeight: "600", marginLeft: "2vh" }}>
                    Account
                  </h6>
                  <NavDropdown.Item href="#action/3.2">
                    Premium
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Settings & Privacy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Language
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h6 style={{ fontWeight: "600", marginLeft: "2vh" }}>
                    Manage
                  </h6>
                  <NavDropdown.Item href="#action/3.4">
                    Posts & Activity
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Job Posting Account
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
                <div
                  style={{
                    borderLeft: "1px solid rgba(0,0,0,.2)",
                    height: "60px",
                    marginRight: "2vh",
                    marginLeft: "2vh",
                    marginTop: "0px",
                    padding: "0px",
                  }}
                ></div>

                <NavDropdown
                  title={
                    <div>
                      {th}
                      <br></br>
                      Work
                    </div>
                  }
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">more</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link eventKey={4} href="#">
                  <FontAwesomeIcon icon={faTh} />
                  <br></br>Learning
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default withRouter(NavBar);
