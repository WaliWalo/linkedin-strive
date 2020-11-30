import React, { Component } from "react";
import { fetchListOfProfiles } from '../api/linkedinApi'
import {Row} from 'react-bootstrap'

class PeopleViewed extends Component {
  state = {
    profiles: {},
  }; 


  async componentDidMount() {
    let profiles = await fetchListOfProfiles();
    console.log(profiles);
    this.setState({ profiles: profiles });
  }
  render() {
    return (
      <div>
        PeopleViewed
        <Row>{this.state.profiles}</Row>
      </div>
    
    ) 
  }
}

export default PeopleViewed