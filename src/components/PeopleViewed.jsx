import React, { Component } from "react";
import { fetchListOfProfiles } from "../api/linkedinApi";
import Profiles from "./Profiles";
import { Card, ListGroup, Button, Accordion } from "react-bootstrap";

class PeopleViewed extends Component {
  state = {
    profiles: [],
    randomProfiles: [],
    moreProfiles: [],
    // seeMore: true
  };

  async componentDidMount() {
    let profiles = await fetchListOfProfiles();
    let viewedPeople = [];
    if (profiles.length !== 0) {
      for (let i = 0; i < 10; i++) {
        viewedPeople.push(
          profiles[Math.floor(Math.random() * profiles.length) + 1]
        );
      }
    }
    this.setState({ profiles: profiles, randomProfiles: viewedPeople });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.profiles !== prevState.profiles) {
      this.setState({ profiles: this.state.randomProfiles });
    }
  }
  // seeMore = () => { this.setState({seeMore: false})}
  render() {
    return (
      <div>
        {this.state.profiles && this.state.randomProfiles ? (
          <div className="mt-4">
            <Card className="mr-5" style={{ width: "18rem" }}>
              <h4 className="mt-4 ml-3">People also Viewed</h4>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <Accordion defaultActiveKey="0">
                    {this.state.randomProfiles
                      .slice(0, 6)
                      .map((profile, index) => (
                        <Profiles key={index} profiles={profile} />
                      ))}

                    <Card>
                      <Accordion.Collapse eventKey="1">
                        <>
                          {this.state.randomProfiles
                            .slice(6, 11)
                            .map((profile, index) => (
                              <Profiles key={index} profiles={profile} />
                            ))}
                        </>
                      </Accordion.Collapse>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="1"
                        >
                          Click me!
                          {/* onClick={this.seeMore} {this.state.seeMore ? (display See More):(display see less)} */}
                        </Accordion.Toggle>
                      </Card.Header>
                    </Card>
                  </Accordion>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        ) : (
          "SOMETHING WENT WRONG"
        )}
      </div>
    );
  }
}

export default PeopleViewed;
