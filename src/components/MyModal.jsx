/** @format */

import React, { Component } from "react";
import { Button, Form, Modal, Row, Spinner } from "react-bootstrap";
import {
  createExperience,
  submitExperienceImage,
  updateSingleExperience,
} from "../api/linkedinApi";
import "./css/ExpModal.css";

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
    filesSelected: null,
    loading: false,
  };

  updateField = (e) => {
    let experience = { ...this.state.experience };
    let currentId = e.currentTarget.id;

    experience[currentId] = e.currentTarget.value;
    this.setState({ experience: experience });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    let submitMessage;
    let submitImgMsg;
    if (this.props.edit !== true) {
      submitMessage = await createExperience(
        this.props.profile._id,
        this.state.experience
      );
      if (this.state.filesSelected !== null) {
        submitImgMsg = await submitExperienceImage(
          this.props.profile._id,
          this.state.filesSelected,
          submitMessage._id
        );
        alert(submitImgMsg);
      }
    } else {
      submitMessage = await updateSingleExperience(
        this.props.profile._id,
        this.props.exp._id,
        this.state.experience
      );
      if (this.state.filesSelected !== null) {
        submitImgMsg = await submitExperienceImage(
          this.props.profile._id,
          this.state.filesSelected,
          this.props.exp._id
        );
        alert(submitImgMsg);
      }
    }

    alert("Experience Created");
    this.setState({
      experience: {
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
      },
      loading: false,
    });
    let hideModal = this.props.onHide;
    hideModal();
  };

  handleChange(files) {
    this.setState({
      filesSelected: files[0],
    });
  }

  componentDidUpdate(prevProp) {
    let newExp = this.props.exp;
    if (this.props.exp !== prevProp.exp) {
      this.setState({
        experience: newExp,
      });
    }
  }

  render() {
    return (
      <Modal
        className="modal1"
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          {this.props.edit ? (
            <Modal.Title>Edit Experience</Modal.Title>
          ) : (
            <Modal.Title>Add Experience</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {this.state.loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Row>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter Role"
                    id="role"
                    value={this.state.experience.role}
                    onChange={this.updateField}
                  />

                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Company"
                    id="company"
                    value={this.state.experience.company}
                    onChange={this.updateField}
                  />
                </Row>
                <Row>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    id="startDate"
                    value={this.state.experience.startDate}
                    onChange={this.updateField}
                  />

                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    id="endDate"
                    value={this.state.experience.endDate}
                    onChange={this.updateField}
                  />
                </Row>
                <Row>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    rows={3}
                    id="description"
                    value={this.state.experience.description}
                    onChange={this.updateField}
                  />
                </Row>
                <Row>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    rows={3}
                    id="area"
                    value={this.state.experience.area}
                    onChange={this.updateField}
                  />
                </Row>
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
    );
  }
}
