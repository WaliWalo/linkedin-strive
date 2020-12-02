import React from "react";
import { Row, Col, Card, ListGroupItem } from "react-bootstrap";
import "./Profiles.css";


class Profiles extends React.Component {
  state = {
    profile: this.props.profiles,
  };

    
  render() {
    return (
      <>
        <ListGroupItem>
          <Row>
            <Col xs={2} className="pl-0 pr-1 my-1">
              <Card.Img
                className="profile-img"
                src={this.state.profile.image}
                stye={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </Col>
            <Col xs={8} className="pl-1 pr-0">
              <Card.Title className="title">
                {this.state.profile.name} {this.state.profile.surname}
              </Card.Title>
              <Card.Text>{this.state.profile.title}</Card.Text>
            </Col>
            <Col xs={2} className="px-0">
                        <a href="http://" className="btn border border-secondary" stye={{ borderRadius: "100%"}}>icon </a>
                            
              
            </Col>
          </Row>
        </ListGroupItem>
      </>
    );
  }
}
export default Profiles