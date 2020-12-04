import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchResult extends Component {
  handleClick = () => {
    const closeModal = this.props.handleClose;
    closeModal();
    this.props.history.push(`/profile/${this.props.result._id}`);
  };
  render() {
    return <div onClick={this.handleClick}>{this.props.result.name}</div>;
  }
}
export default withRouter(SearchResult);
