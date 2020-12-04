/** @format */

import React from "react";
import { Row, Col, Card, ListGroupItem } from "react-bootstrap";
import "./Profiles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

class Profiles extends React.Component {
  state = {
    profile: this.props.profiles,
  };

  render() {
    return (
      <>
        <ListGroupItem id="list-item">
          <Row className="mt-2">
            <Col xs={2} className="pl-1 pr-1 mt-2 mr-2" id="img-col">
              {this.state.profile.image ? (
                <Card.Img
                  className="profile-img"
                  src={this.state.profile.image}
                  onClick={() =>
                    this.props.history.push(
                      `/profile/${this.state.profile._id}`
                    )
                  }
                  alt="http://placehold.it/20x20"
                />
              ) : (
                <Card.Img src="http://placehold.it/20x20" />
              )}
            </Col>
            <Col xs={6} className=" pl-0" id="name-col">
              <Card.Title className="title">
                {this.state.profile.name} {this.state.profile.surname}
              </Card.Title>

              <Card.Text id="card-text">{this.state.profile.title}</Card.Text>
            </Col>
            <Col xs={3} className="mx-0 my-0 pt-1 pr-0" id="icon-col">
              <a href="http://" className="btn" id="icon-plus">
                <FontAwesomeIcon icon={faUserPlus} />
              </a>
            </Col>
          </Row>
        </ListGroupItem>
      </>
    );
  }
}
export default withRouter(Profiles);
