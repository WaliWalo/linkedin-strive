import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Activity.css";
export default class Activity extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="activity">
            <div className="activity-sec1">
              <div className="activity-sec1-item1">
                <h2 id="activity-text">Activity</h2>
                <p>
                  <span className="followers">492 followers </span>
                  <button type="button" className="activity-link">
                    Manage followers
                  </button>
                </p>
              </div>
              <div className="activity-sec1-item2">
                <button type="button" className="activity-link">
                  See all
                </button>
              </div>
            </div>
            <div className="activity-sec2">
              <div className="activity-sec2-item1">
                <div>
                  <img src="https://dummyimage.com/56" alt="" />
                </div>
                <div className="innerpost">
                  <p className="post-text">
                    Manilyn Estomo #Kudos I just wanted to say #ThankYou
                  </p>
                  <p>Ikemba shared this</p>
                </div>
              </div>
              <div className="activity-sec2-item2">
                <div>
                  <img src="https://dummyimage.com/56" alt="" />
                </div>
                <div className="innerpost">
                  <p className="post-text">
                    Just finished the course "Tips for Writing Business Emails"
                  </p>
                  <p>Ikemba shared this</p>
                </div>
              </div>
            </div>
            <div className="activity-sec3">
              <div className="activity-sec3-item1">
                <div>
                  <img src="https://dummyimage.com/56" alt="" />
                </div>
                <div className="innerpost">
                  <p className="post-text">
                    Just finished the course "Establishing Credibility as a
                    Speaker"
                  </p>
                  <p>Ikemba shared this</p>
                </div>
              </div>
              <div className="activity-sec3-item2">
                <div>
                  <img src="https://dummyimage.com/56" alt="" />
                </div>
                <div className="innerpost">
                  <p className="post-text">
                    Just finished the course "What is Graphic
                    Design?"!#designtheory...
                  </p>
                  <p>Ikemba shared this</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
