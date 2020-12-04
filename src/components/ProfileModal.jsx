import React, { Component } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { submitProfileImage } from "../api/linkedinApi";

export default class ProfileModal extends Component {
  state = {
    filesSelected: null,
    loading: false,
  };

  handleChange(files) {
    this.setState({
      filesSelected: files[0],
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    let submitMsg = await submitProfileImage(
      this.props.profile._id,
      this.state.filesSelected
    );
    this.setState({ loading: false });
    alert(submitMsg);
    let hideModal = this.props.onHide;
    hideModal();
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
            {this.state.loading ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
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
            )}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
