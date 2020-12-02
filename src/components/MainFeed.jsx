/** @format */

import {
  faCalendarCheck,
  faEdit,
  faImage,
  faNewspaper,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  ListGroup,
  Row,
} from "react-bootstrap";
import { fetchPosts } from "../api/linkedinPost";
import "./css/MainFeed.css";
import PostModal from "./PostModal";
import SingleFeed from "./SingleFeed";

export default class MainFeed extends Component {
  state = { show: false, feeds: [] };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  componentDidMount = async () => {
    let feeds = await fetchPosts();
    this.setState({ feeds });
  };

  render() {
    return (
      <div>
        <PostModal
          show={this.state.show}
          onHide={this.handleClose}
          profile={this.props.profile}
        />
        <Container className="mainPost mb-3">
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
        </Container>
        <Container>
          <Row>
            <Col xs={10}>
              <Dropdown.Divider />
            </Col>
            <Col className="m-0" xs={2}>
              <p>Sort by</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <ListGroup>
              {this.state.feeds &&
                this.state.feeds.map((feed, index) => {
                  return (
                    <SingleFeed
                      key={index}
                      feed={feed}
                      profile={this.props.profile}
                    />
                  );
                })}
            </ListGroup>
          </Row>
        </Container>
      </div>
    );
  }
}
