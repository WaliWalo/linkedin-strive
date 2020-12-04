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
import { fetchListOfProfiles } from "../api/linkedinApi";
import { fetchPosts } from "../api/linkedinPost";
import "./css/MainFeed.css";
import PostModal from "./PostModal";
import SingleFeed from "./SingleFeed";

export default class MainFeed extends Component {
  state = { show: false, feeds: [], profiles: [], edit: false, filtered: {} };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
    this.setState({ edit: false });
  };

  handleEdit = () => {
    this.setState({ edit: true });
  };

  handleEditFalse = () => {
    this.setState({ edit: false });
  };

  handleResetState;

  componentDidMount = async () => {
    let feeds = await fetchPosts();

    this.setState({ feeds: feeds.reverse() });

    let profiles = await fetchListOfProfiles();
    this.setState({ profiles });
  };

  componentDidUpdate = async (prevProp, prevState) => {
    if (this.state.feeds !== prevState.feeds) {
      let feeds = await fetchPosts();
      this.setState({ feeds: feeds.reverse() });
    }
    if (this.state.edit !== prevState.edit) {
      let filtered = this.state.feeds.filter(
        (feed) => feed.username === this.props.profile.username
      )[0];
      this.setState({ filtered });
    }
  };

  handleSort = () => {
    const feeds = this.state.feeds.reverse();
    this.setState({ feeds });
  };

  render() {
    return (
      <div>
        <PostModal
          show={this.state.show}
          onHide={this.handleClose}
          profile={this.props.profile}
          edit={this.state.edit}
          handleEdit={this.handleEditFalse}
          feed={this.state.filtered}
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
                    &nbsp; Photo
                  </Button>
                </Col>
                <Col>
                  <Button className="post2Btn" size="sm">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ color: "#E7A33E" }}
                    />
                    &nbsp; Video
                  </Button>
                </Col>
                <Col>
                  <Button className="post2Btn" size="sm">
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      style={{ color: "#A0B4B7" }}
                    />
                    &nbsp; Event
                  </Button>
                </Col>
                <Col>
                  <Button className="post2Btn" size="sm">
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      style={{ color: "#7FC15E" }}
                    />
                    &nbsp; Write an Article
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
            <Col className="m-0" xs={2} onClick={this.handleSort}>
              <p>Sort by</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <ListGroup>
              {this.state.feeds &&
                this.state.feeds.map((feed, index) => {
                  let filtered = this.state.profiles.filter(
                    (profile) => profile.username === feed.username
                  );
                  return (
                    <SingleFeed
                      key={index}
                      feed={feed}
                      profile={filtered}
                      myProfile={this.props.profile}
                      showModal={this.handleShow}
                      editModal={this.handleEdit}
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
