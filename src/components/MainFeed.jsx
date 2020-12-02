import {
  faCalendarCheck,
  faEdit,
  faImage,
  faNewspaper,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { fetchPosts } from "../api/linkedinPost";
import "./css/MainFeed.css";
import PostModal from "./PostModal";

export default class MainFeed extends Component {
  state = { show: false };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  componentDidMount = () => {};

  render() {
    return (
      <div>
        <PostModal
          show={this.state.show}
          onHide={this.handleClose}
          profile={this.props.profile}
        />
        <Container>
          <Row className="mt-2">
            <Col>
              <Row>
                <Button className="postBtn" onClick={this.handleShow}>
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ fontSize: "larger" }}
                  />
                  Start A Post
                </Button>
              </Row>
              <Dropdown.Divider />
              <Row className="postSecondary">
                <Col>
                  <Button className="post2Btn" size="sm">
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ color: "#70B5F9" }}
                    />
                    Photo
                  </Button>
                </Col>
                <Col>
                  <Button className="post2Btn" size="sm">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ color: "#E7A33E" }}
                    />
                    Video
                  </Button>
                </Col>
                <Col>
                  <Button className="post2Btn" size="sm">
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      style={{ color: "#A0B4B7" }}
                    />
                    Event
                  </Button>
                </Col>
                <Col>
                  <Button className="post2Btn" size="sm">
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      style={{ color: "#7FC15E" }}
                    />
                    Write an Article
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    );
  }
}
