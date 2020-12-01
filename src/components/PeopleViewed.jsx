import React, { Component } from "react";
import { fetchListOfProfiles } from '../api/linkedinApi'
import Profiles from "./Profiles";
import {  Card, ListGroup, } from 'react-bootstrap'


class PeopleViewed extends Component {

  state = {
    profiles: []
  };


  async componentDidMount() {
    let profiles = await fetchListOfProfiles();
    this.setState({ profiles: profiles });
  }



  render() {
    
    return (
      <div>
        {this.state.profiles && (
          <div className='d-flex justify-content-end'>
            
            <Card className='mr-5' style={{ width: '18rem' }}>
              <h4 className='mt-4'>People also Viewed</h4>
              <Card.Body>
                
                  
                    <ListGroup className="list-group-flush">
                    {this.state.profiles.map((profile, index) => (
                      <Profiles key={index} profiles={profile} />
                    ))}
                </ListGroup> 
                
                
                  </Card.Body>
              
            </Card>
          </div>
        )}



      </div>

    )
  }
}

export default PeopleViewed