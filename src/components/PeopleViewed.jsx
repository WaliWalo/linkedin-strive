import React, { Component } from "react";
import { fetchListOfProfiles } from "../api/linkedinApi";
import Profiles from "./Profiles";
import { Card, ListGroup, Button, Accordion } from "react-bootstrap";



class PeopleViewed extends Component {
  state = {
    profiles: [],
    randomProfiles: [],
    moreProfiles: []
  };


  async componentDidMount() {
    let profiles = await fetchListOfProfiles();
    let viewedPeople = [];
    if (profiles.length !== 0) {
      for (let i = 0; i < 5; i++) {
        viewedPeople.push(
          profiles[Math.floor(Math.random() * profiles.length) + 1]
        );
      }
    }
    this.setState({ profiles: profiles, randomProfiles: viewedPeople });
  }

  clickMore = async () => {
    let moreProfiles = await fetchListOfProfiles();
    let newProfiles = [];
    if (moreProfiles.length !== 0) {
      for (let i = 0; i < 5; i++) {
        newProfiles.push(
          this.state.profiles[Math.floor(Math.random() * this.state.profiles.length) + 1]
        );
      }

    }
    this.setState({ profiles: this.state.profiles, randomProfiles: newProfiles, })
    console.log()
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.profiles !== prevState.profiles) {
     this.setState({ profiles: this.state.randomProfiles })
   }
  }

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
                      <Accordion.Collapse eventKey="0">
                      </Accordion.Collapse>
                      <Card.Footer><Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                        </Accordion.Toggle>
                      </Card.Footer>
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
