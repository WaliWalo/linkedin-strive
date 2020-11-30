import React, { Component } from "react";
import { fetchListOfProfiles } from '../api/linkedinApi'
import Profiles from "./Profiles";


class PeopleViewed extends Component {
  
  state = {
    profiles: []
  };

  async componentDidMount() {
    let profiles = await fetchListOfProfiles();
    console.log(profiles);
    this.setState({  profiles: profiles });
  }

 
  
  render() {
    
    return (
      <div>
        {this.state.profiles && (
         <div> {this.state.profiles.map((profile, index) => (
          <Profiles key={index} profiles={profile} />
        ))} </div>
        )}
        

        PeopleViewed
        
      </div>
    
    ) 
  }
}

export default PeopleViewed