import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Featured.css";

export default class Featured extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="featured">
            <h2 className="featured-text">Featured</h2>
            <div className="featured-description">
              <div className="featured-description-text">
                <p className="desc">
                  <strong>Showcase your work </strong>
                  <span>
                    by featuring your best posts, documents, media, and
                    websites.
                  </span>
                </p>

                <p className="small-text">Add Featured</p>
              </div>
              <div className="featured-description-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
