import React, { Component } from "react";
import { fetchListOfProfiles } from "../api/linkedinApi";
import Profiles from "./Profiles";
import { Card, ListGroup } from "react-bootstrap";
export default class PeopleKnow extends Component {
  state = {
    profiles: [],
    randomProfiles: []
  }

  async componentDidMount() {
    let profiles = await fetchListOfProfiles();
    let newPeople = [];
    if (profiles.length !== 0) {
      for (let i = 0; i < 5; i++) {
        newPeople.push(
          profiles[Math.floor(Math.random() * profiles.length) + 1]
        );
      }
    }
    this.setState({ profiles: profiles, randomProfiles: newPeople });
  }

  render() {
    return (
      <div>
        {this.state.profiles && this.state.randomProfiles ? (
          <div className="mt-4">
            <Card className="mr-5" style={{ width: "18rem" }}>
              <h4 className="mt-4 ml-3">People you may know</h4>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  {this.state.randomProfiles
                    .slice(0, 6)
                    .map((profile, index) => (
                      <Profiles key={index} profiles={profile} />
                    ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        ) : (
          "SOMETHING WENT WRONG"
        )}</div>);
  }
}
