import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/SidebarLeft.css";

export default class SidebarLeft extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="sidebar-left-profile">
              <div className="sidebar-left-profile-head">
                <div className="sidebar-left-background-top"></div>
                <div className="sidebar-left-img">
                  <img
                    src={this.props.profile.image}
                    className="contain"
                    alt=""
                  />
                </div>
                <p className="sidebar-left-profileName">
                  {this.props.profile.name} {this.props.profile.surname}
                </p>
                <p className="sidebar-left-title">{this.props.profile.title}</p>
              </div>
              <div className="feed-identity">
                <button type="button" className="viewedProfile">
                  <div className="viewedProfile-text">
                    Who viewed your profile
                  </div>
                  <div className="numb">6</div>
                </button>
                <button type="button" className="viewedPost">
                  <div className="viewedPost-text">Views of your post</div>
                  <div className="numb">114</div>
                </button>
              </div>

              <button type="button" className="sidebar-left-subInfo">
                <p className="sidebar-left-info">
                  Access exclusive tools & insights
                </p>
                <div className="sidebar-left-sub">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    class="mercado-match"
                    width="17"
                    height="17"
                    focusable="false"
                  >
                    <path
                      d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                      fill="#f8c77e"
                    ></path>
                    <path
                      d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                      fill="#e7a33e"
                    ></path>
                  </svg>
                  <p className="premium">Reactivate Premium</p>
                </div>
              </button>
              <div className="savedItems">
                <button type="button" id="savedItems">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
                  </svg>
                  <p className="savedItems-text"> Saved Items</p>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
