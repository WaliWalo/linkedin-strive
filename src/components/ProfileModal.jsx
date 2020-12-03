import React, { Component } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { submitProfileImage } from "../api/linkedinApi";

export default class ProfileModal extends Component {
  state = {
    filesSelected: null,
  };

  handleChange(files) {
    console.log(files);
    this.setState({
      filesSelected: files[0],
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let submitMsg = await submitProfileImage(
      this.props.profile._id,
      this.state.filesSelected
    );
    alert(submitMsg);
  };

  render() {
    return (
      <div>
        <Modal
          className="modal1"
          show={this.props.show}
          onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.File.Input
                  onChange={(e) => this.handleChange(e.target.files)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
