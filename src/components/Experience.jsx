/** @format */

import React, { Component } from "react";
import { Container, ListGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "./css/Experience.css";
import MyModal from "./MyModal";
import { deleteExperience, fetchUserExperiences } from "../api/linkedinApi";
import SingleExperience from "./SingleExperience";

export default class Experience extends Component {
  state = {
    experiences: [],
    show: false,
    profile: this.props.profile,
    edit: false,
    selectedExp: {},
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false, edit: false });
  };

  handleEdit = () => {
    this.setState({ edit: true });
  };

  handleRemoveExp = async (userId, expId) => {
    let submitMsg = await deleteExperience(userId, expId);
    const experiences = this.state.experiences.filter(
      (experience) => experience._id !== expId
    );
    this.setState({ experiences });
    alert(submitMsg);
  };

  getExp = (exp) => {
    this.setState({ selectedExp: exp });
  };

  componentDidMount = async () => {};

  componentDidUpdate = async (prevProp, prevState) => {
    if (this.props.profile !== prevProp.profile) {
      let experiences = await fetchUserExperiences(this.props.profile._id);
      this.setState({ experiences });
    }

    if (this.state.show !== prevState.show) {
      let experiences = await fetchUserExperiences(this.props.profile._id);
      this.setState({ experiences });
    }
    //JSON STRINGIFY compare string
    if (
      JSON.stringify({ exp: this.state.experiences }) !==
      JSON.stringify({ exp: prevState.experiences })
    ) {
      let experiences = await fetchUserExperiences(this.props.profile._id);
      this.setState({ experiences });
    }
  };

  render() {
    return (
      <div>
        <Container className="whatever">
          <Row className="headerRow">
            <h3 className="text">Experience</h3>
            {this.props.profile._id === this.props.myProfile._id && (
              <FontAwesomeIcon icon={faPlusSquare} onClick={this.handleShow} />
            )}
          </Row>
          <Row>
            <ListGroup variant="flush" style={{ width: "100%" }}>
              {this.state.experiences &&
                this.state.experiences.map((experience, index) => {
                  return (
                    <SingleExperience
                      key={index}
                      experience={experience}
                      profileId={this.props.profile._id}
                      handleRemove={this.handleRemoveExp}
                      showModal={this.handleShow}
                      handleEdit={this.handleEdit}
                      getExp={this.getExp}
                      profile={this.props.profile}
                      myProfile={this.props.myProfile}
                    />
                  );
                })}
            </ListGroup>
          </Row>
          <MyModal
            show={this.state.show}
            onHide={this.handleClose}
            profile={this.props.profile}
            edit={this.state.edit}
            exp={this.state.selectedExp}
          />
        </Container>
      </div>
    );
  }
}
