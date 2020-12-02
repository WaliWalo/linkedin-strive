/** @format */

import React, { Component } from "react";
import { Col, Container, Dropdown, Row, Image, Form } from "react-bootstrap";
import {
  faCommentAlt,
  faPaperPlane,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/SinglePost.css";

class SingleFeed extends Component {
  render() {
    return (
      <div>
        <Container className="mt-3" id="aboutCard">
          <Row className="mb-2" id="aboutTitle">
            <Col xs={1}>
              <Image className="profileImg" src={this.props.profile.image} />
            </Col>
            <Col xs={2}>
              <h6>{this.props.feed.username}</h6>
              <p>title</p>
            </Col>
            <Col xs={8}></Col>
          </Row>
          <Row>
            <span>{this.props.feed.text}</span>
          </Row>
          <Row className="ml-2">
            <FontAwesomeIcon icon={faThumbsDown} />
          </Row>
          <Dropdown.Divider />
          <Row className="LikeDislike">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>Like</span>

            <FontAwesomeIcon icon={faCommentAlt} />
            <span>Comment</span>

            <FontAwesomeIcon icon={faShare} />

            <span>Share</span>

            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Send</span>
          </Row>
          <Row className="mt-3 addComment">
            <Col xs={1} className="mt-2">
              <Image className="profileImg" src={this.props.profile.image} />
            </Col>
            <Col xs={10}>
              <Form.Group>
                <Form.Control
                  className="commentBox"
                  size="sm"
                  type="text"
                  placeholder="Add a comment..."
                />
              </Form.Group>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    );
  }
}

export default SingleFeed;
