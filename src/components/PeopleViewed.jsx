/** @format */

import React, { Component } from "react";
import { fetchListOfProfiles } from "../api/linkedinApi";
import Profiles from "./Profiles";
import './Profiles.css'
import { Card, ListGroup, Accordion } from "react-bootstrap";


class PeopleViewed extends Component {
  state = {
    profiles: [],
    randomProfiles: [],
    moreProfiles: [],
   seeMore: true
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
  
  seeMore = () => {
    this.setState({
      seeMore: false 
    })
  }
  
  render() {
    
    return (
      <div>
        {this.state.profiles && this.state.randomProfiles ? (
          <div className="mt-4">
            <Card className="" style={{ width: "18rem" }}>
              <h4 className="mt-4 ml-3">People also Viewed</h4>
              <Card.Body className="my-0 mx-0 px-0 py-0">
                <Accordion defaultActiveKey="0">
                  <ListGroup className="list-group-flush">
                      <>
                      {this.state.randomProfiles
                      .slice(0, 6)
                      .map((profile, index) => (
                        <Profiles key={index} profiles={profile} />
                      ))}
                        </>
                      <Accordion.Collapse eventKey="1">
                        <>
                          {this.state.randomProfiles
                            .slice(6, 11)
                            .map((profile, index) => (
                              <Profiles key={index} profiles={profile} />
                            ))}
                        </>
                      </Accordion.Collapse>  
                  </ListGroup>
                  <Accordion.Toggle
                        as={Card.Header}
                        eventKey="1"
                        onClick={this.seeMore} 
                      
                  >
                        {this.state.seeMore ? "See more" : "See less" }
                        
                          
                        </Accordion.Toggle>
                </Accordion>
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
