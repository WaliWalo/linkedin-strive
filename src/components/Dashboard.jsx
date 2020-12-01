/** @format */

import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./css/Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="dashboard">
            <div className="dashboard-sec1">
              <div className="dashboard-sec1-item1">
                <h3 className="dashboard-text">Your Dashboard</h3>
                <p className="text-italic">Private to you</p>
              </div>
              <div className="dashboard-sec1-item2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 5.66l1 2 2.24.34-1.62 1.57.38 2.23-2-1.05-2 1.05.38-2.23L8.76 8 11 7.67l1-2m0-3.91L9.84 6.07 5 6.77l3.5 3.41L7.67 15 12 12.73 16.33 15l-.83-4.82L19 6.77l-4.84-.7L12 1.75zM11 15h2v7h-2v-7zm4 2h2v4h-2v-4zm-8 0h2v4H7v-4z"></path>
                </svg>

                <span>All Star</span>
              </div>
            </div>
            <div className="dashboard-sec2">
              <div className="dashboard-sec2-item1">
                <div className="num">8</div>
                <div className="post">Who viewed your profile</div>
              </div>
              <div className="dashboard-sec2-item2">
                <div className="num">114</div>
                <div className="post">Post views</div>
              </div>
              <div className="dashboard-sec2-item3">
                <div className="num">1</div>
                <div className="post">Search appearance</div>
              </div>
            </div>
            <div className="dashboard-sec3">
              <div className="dashboard-sec3-item1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                </svg>
                <div className="myItems">
                  <h4 className="item-text">My items</h4>
                  <p className="item-text">
                    Keep track of your jobs,courses and articles
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
