/** @format */

import React, { Component } from "react";
import {
  Container,
  Image,
  Navbar,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { fetchMyProfile } from "../api/linkedinApi";

export default class ProfileNavBar extends Component {
  state = {
    profile: {},
  };

  async componentDidMount() {
    let profile = await fetchMyProfile();

    this.setState({ profile: profile });
  }

  render() {
    return (
      <>
        {this.state.profile && (
          <Navbar
            fixed="top"
            style={{
              zIndex: "100",
              backgroundColor: "#fff",
              boxShadow: " 0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2)",
            }}
          >
            <Container>
              <Navbar.Brand href="#home">
                <Image
                  src={this.state.profile.image}
                  style={{
                    width: "40px",
                    height: "40px",
                    boxSizing: "border-box",
                    backgroundClip: "content-box",

                    borderRadius: "100px",
                  }}
                />
              </Navbar.Brand>
              <div>
                {this.state.profile.name} &nbsp; {this.state.profile.surname}
                <br></br>
                {this.state.profile.title}
              </div>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <div
                  style={{
                    fontWeight: "600",
                    cursor: "pointer",
                    borderRadius: "100px",
                  }}
                >
                  <Dropdown as={ButtonGroup}>
                    <Button
                      variant="primary"
                      style={{
                        fontWeight: "600",
                        cursor: "pointer",
                        borderRadius: "100px",
                        width: "25vh",
                        maxWidth: "480px",
                      }}
                    >
                      Edit Your profile
                    </Button>

                    <Dropdown.Toggle
                      split
                      variant="success"
                      id="dropdown-split-basic"
                      className="invisible"
                    />

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
                </div>
                <Dropdown as={ButtonGroup}>
                  <Button
                    variant="outline-dark"
                    style={{
                      fontWeight: "600",
                      cursor: "pointer",
                      borderRadius: "100px",
                    }}
                  >
                    more...
                  </Button>

                  <Dropdown.Toggle
                    split
                    variant="success"
                    id="dropdown-split-basic"
                    className="invisible"
                  />

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
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}
      </>
    );
  }
}
