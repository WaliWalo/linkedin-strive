import React, { Component } from "react";
import About from "./About";
import Activity from "./Activity";
import Dashboard from "./Dashboard";
import Experience from "./Experience";
import Featured from "./Featured";
import Interests from "./Interests";
import PeopleKnow from "./PeopleKnow";
import PeopleViewed from "./PeopleViewed";
import ProfileSection from "./ProfileSection";
import Questions from "./Questions";
import Skills from "./Skills";

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <ProfileSection />
        <About />
        <Featured />
        <Dashboard />
        <Activity />
        <Experience />
        <Skills />
        <Interests />
        <PeopleViewed />
        <PeopleKnow />
        <Questions />
      </div>
    );
  }
}
