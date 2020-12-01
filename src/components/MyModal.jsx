import React, { Component } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { createExperience } from "../api/linkedinApi";

export default class MyModal extends Component {
  state = {
    experience: {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    },
  };

  updateField = (e) => {
    let experience = { ...this.state.experience };
    let currentId = e.currentTarget.id;

    experience[currentId] = e.currentTarget.value;
    this.setState({ experience: experience });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let submitMessage = await createExperience(
      this.props.profile._id,
      this.state.experience
    );
    alert(submitMessage);
    this.setState({
      experience: {
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
      },
    });
    let hideModal = this.props.onHide;
    hideModal();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Role"
                    id="role"
                    value={this.state.experience.role}
                    onChange={this.updateField}
                  />
                </Col>
                <Col>
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company"
                    id="company"
                    value={this.state.experience.company}
                    onChange={this.updateField}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    id="startDate"
                    value={this.state.experience.startDate}
                    onChange={this.updateField}
                  />
                </Col>
                <Col>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    id="endDate"
                    value={this.state.experience.endDate}
                    onChange={this.updateField}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    id="description"
                    value={this.state.experience.description}
                    onChange={this.updateField}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    type="text"
                    rows={3}
                    id="area"
                    value={this.state.experience.area}
                    onChange={this.updateField}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
