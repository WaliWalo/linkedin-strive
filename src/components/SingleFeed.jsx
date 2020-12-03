/** @format */

import React, { Component } from "react";
import {
  Col,
  Container,
  Dropdown,
  Row,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import {
  faCommentAlt,
  faEllipsisH,
  faPaperPlane,
  faPen,
  faShare,
  faThumbsDown,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/SinglePost.css";
import { deletePost } from "../api/linkedinPost";

class SingleFeed extends Component {
  handleRemove = async () => {
    const removeResult = await deletePost(this.props.feed._id);
    alert(removeResult.toString());
  };

  handleEdit = () => {
    let showModal = this.props.showModal;
    let editModal = this.props.editModal;
    showModal();
    editModal();
  };

  render() {
    return (
      <div>
        {this.props.profile.length !== 0 && (
          <Container className="mt-3" id="aboutCard">
            <Row className="mb-2" id="aboutTitle">
              <Col xs={2}>
                <Image
                  className="profileImg"
                  src={this.props.profile[0].image}
                />
              </Col>
              <Col xs={2}>
                <h6>{this.props.feed.username}</h6>
                <p style={{ whiteSpace: "nowrap" }}>
                  {this.props.profile[0].title}
                </p>
                <p style={{ whiteSpace: "nowrap" }}>
                  At:&nbsp;
                  {this.props.profile[0].createdAt.slice(11, 16)} &nbsp;
                  On:&nbsp;
                  {this.props.profile[0].createdAt.slice(0, 10)}
                </p>
              </Col>
              <Col xs={4}></Col>
              <Col xs={3}>
                {this.props.myProfile.username ===
                  this.props.profile[0].username && (
                  <Dropdown className="ml-3">
                    <Dropdown.Toggle className="ellipsisBtn">
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="ellipsisBtn mr-4">
                      <Dropdown.Item onClick={this.handleEdit}>
                        <FontAwesomeIcon icon={faPen} />
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.handleRemove}>
                        <FontAwesomeIcon icon={faTrash} />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </Col>
            </Row>
            <Row>
              <span>{this.props.feed.text}</span>
              <Image src={this.props.feed.image} />
            </Row>
            <Row className="ml-2">
              <FontAwesomeIcon icon={faThumbsDown} />
            </Row>
            <Dropdown.Divider />
            <Row className="LikeDislike">
              <FontAwesomeIcon icon={faThumbsUp} /> &nbsp;
              <span>Like</span>
              <FontAwesomeIcon icon={faCommentAlt} /> &nbsp;
              <span>Comment</span>
              <FontAwesomeIcon icon={faShare} /> &nbsp;
              <span>Share</span>
              <FontAwesomeIcon icon={faPaperPlane} /> &nbsp;
              <span>Send</span>
            </Row>
            <Row className="mt-3 addComment">
              <Col xs={1} className="mt-2">
                <Image
                  className="profileImg"
                  src={this.props.profile[0].image}
                />
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
        )}
      </div>
    );
  }
}

export default SingleFeed;
