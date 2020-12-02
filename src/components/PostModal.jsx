/** @format */

import {
  faFile,
  faGlobeAmericas,
  faImage,
  faPlus,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { createPost } from "../api/linkedinPost";
import "./css/PostModal.css";
export default class PostModal extends Component {
  state = {
    post: { text: "" },
  };

  updateField = (e) => {
    let text = e.currentTarget.value;
    this.setState({ post: { text: text } });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let submitMsg = await createPost(this.state.post);
    alert(submitMsg);
    this.setState({ post: { text: "" } });
    let hideModal = this.props.onHide;
    hideModal();
  };
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Create a Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col style={{ flexGrow: "0", margin: "10px", padding: "0" }}>
                  <Image src={this.props.profile.image} className="profImg" />
                </Col>
                <Col>
                  {this.props.profile.name} &nbsp;
                  {this.props.profile.surname}
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      style={{
                        width: "100px",
                        color: "#56687A",
                        backgroundColor: "transparent",
                        borderColor: "#56687A",
                        borderRadius: "100px",
                        fontSize: "13px",
                        height: "30px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faGlobeAmericas}
                        style={{ padding: "0", margin: "0px" }}
                      />
                      Anyone
                    </Dropdown.Toggle>
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
                </Col>
              </Row>
              <Form className="txtArea" onSubmit={this.handleSubmit}>
                <Row>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="What do you wanna talk about?"
                      className="txtAreaControl"
                      required
                      value={this.state.text}
                      onChange={this.updateField}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Button className="hashBtn">Add Hashtag</Button>
                  <p>Help the right people see your post</p>
                </Row>
                <Row className="modalIcons">
                  <Col xs={1}>
                    <FontAwesomeIcon icon={faPlus} style={{ color: "blue" }} />
                  </Col>
                  <Col xs={1}>
                    <FontAwesomeIcon icon={faImage} />
                  </Col>
                  <Col xs={1}>
                    <FontAwesomeIcon icon={faVideo} />
                  </Col>
                  <Col xs={1}>
                    <FontAwesomeIcon icon={faFile} />
                  </Col>
                  <Col xs={6}></Col>
                  <Col xs={2}>
                    {this.state.text === "" ? (
                      <Button disabled type="submit">
                        Post
                      </Button>
                    ) : (
                      <Button type="submit">Post</Button>
                    )}
                  </Col>
                </Row>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer className="modalFooter">
            <Col>
              <Button variant="outline-dark">Celebrate an Occasion</Button>
              <Button variant="outline-dark">Celebrate an Occasion</Button>
              <Button variant="outline-dark">Celebrate an Occasion</Button>
            </Col>
            <Col>
              <Button variant="outline-dark">Celebrate an Occasion</Button>
              <Button variant="outline-dark">Celebrate an Occasion</Button>
              <Button variant="outline-dark">Celebrate an Occasion</Button>
            </Col>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
