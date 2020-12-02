import React, { Component } from "react";

export default class SidebarLeft extends Component {
  render() {
    return (
      <div>
        {this.props.profile.name}
        {this.props.profile.title}
      </div>
    );
  }
}
