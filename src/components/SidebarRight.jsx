/** @format */

import React, { Component } from "react";
import "./SideBarRight.css";
import { Card, ListGroup, Row, Col, Accordion, Button } from "react-bootstrap";
import pic from "../images/dream-job.jpg";
import lady from "../images/lady.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faHashtag,
  faPlus,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

export default class SidebarRight extends Component {
  state = {
    seeMore: true,
  };

  seeMore = () => {
    this.setState({
      seeMore: false,
    });
  };

  render() {
    return (
      <div>
        <Card className="mb-2 sidebarR" style={{ width: "18rem" }}>
          <Card.Header className=" pl-2 CardHeader no-border">
            LinkedIn News
          </Card.Header>
          <Card.Body className="px-0 py-0">
            <ListGroup variant="flush">
              <ListGroup.Item className="no-border pr-0 pl-3 pt-0 listH">
                <Row>
                  <Col xs={1} className="px-0">
                    <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                  </Col>
                  <Col xs={11} className="px-0">
                    <a href="http://" className="sizedT">
                      {" "}
                      OECD issues warning for UK economy
                    </a>
                    <br />
                    <small className="text-muted" id="sml-txt-size">
                      {" "}
                      10h ago • 120 readers{" "}
                    </small>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="no-border pr-0 pl-3 pt-0 listH">
                <Row>
                  <Col xs={1} className="px-0">
                    <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                  </Col>
                  <Col xs={11} className="px-0">
                    <a href="http://" className="sizedT">
                      {" "}
                      Here's who's hiring in the UK
                    </a>
                    <br />
                    <small className="text-muted" id="sml-txt-size">
                      {" "}
                      6d ago • 8,759 readers{" "}
                    </small>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="no-border pr-0 pl-3 pt-0 listH">
                <Row>
                  <Col xs={1} className="px-0">
                    <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                  </Col>
                  <Col xs={11} className="px-0">
                    <a href="http://" className="sizedT">
                      {" "}
                      Why chess is booming right now
                    </a>
                    <br />
                    <small className="text-muted" id="sml-txt-size">
                      {" "}
                      2d ago • 7,475 readers{" "}
                    </small>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="no-border pr-0 pl-3 pt-0 listH">
                <Row>
                  <Col xs={1} className="px-0">
                    <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                  </Col>
                  <Col xs={11} className="px-0">
                    <a href="http://" className="sizedT">
                      Tesla set to enter a roaring market
                    </a>
                    <br />
                    <small className="text-muted" id="sml-txt-size">
                      {" "}
                      1d ago • 34,047 readers{" "}
                    </small>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="no-border pr-0 pl-3 pt-0 listH">
                <Row>
                  <Col xs={1} className="px-0">
                    <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                  </Col>
                  <Col xs={11} className="px-0">
                    <a href="http://" className="sizedT">
                      The biggest merger of 2020?
                    </a>
                    <br />
                    <small className="text-muted" id="sml-txt-size">
                      {" "}
                      1d ago • 18,200 readers{" "}
                    </small>
                  </Col>
                </Row>
              </ListGroup.Item>
              <Accordion defaultActiveKey="0">
                <Accordion.Collapse eventKey="1">
                  <ListGroup variant="flush">
                    <ListGroup.Item className="no-border pr-0 pl-3 pt-0">
                      <Row>
                        <Col xs={1} className="px-0">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="circleIcon"
                          />
                        </Col>
                        <Col xs={11} className="px-0">
                          <a href="http://" className="sizedT">
                            Amazon is adding 2.8K workers a day
                          </a>
                          <br />
                          <small className="text-muted" id="sml-txt-size">
                            {" "}
                            2d ago • 11,809 readers{" "}
                          </small>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className="no-border pr-0 pl-3 pt-0">
                      <Row>
                        <Col xs={1} className="px-0">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="circleIcon"
                          />
                        </Col>
                        <Col xs={11} className="px-0">
                          <a href="http://" className="sizedT">
                            Reaching peak "pandemic fatigue"
                          </a>
                          <br />
                          <small className="text-muted" id="sml-txt-size">
                            {" "}
                            2d ago • 1,729 readers{" "}
                          </small>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className="no-border pr-0 pl-3 pt-0">
                      <Row>
                        <Col xs={1} className="px-0">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="circleIcon"
                          />
                        </Col>
                        <Col xs={11} className="px-0">
                          <a href="http://" className="sizedT">
                            How to be funny in a job application
                          </a>
                          <br />
                          <small className="text-muted" id="sml-txt-size">
                            {" "}
                            1d ago • 260 readers{" "}
                          </small>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className="no-border pr-0 pl-3 pt-0">
                      <Row>
                        <Col xs={1} className="px-0">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="circleIcon"
                          />
                        </Col>
                        <Col xs={11} className="px-0">
                          <a href="http://" className="sizedT">
                            Santa, you're on mute!
                          </a>
                          <br />
                          <small className="text-muted" id="sml-txt-size">
                            {" "}
                            9h ago • 252 readers{" "}
                          </small>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className="no-border pr-0 pl-3 pt-0">
                      <Row>
                        <Col xs={1} className="px-0">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="circleIcon"
                          />
                        </Col>
                        <Col xs={11} className="px-0">
                          <a href="http://" className="sizedT">
                            We may have reached peak oil
                          </a>
                          <br />
                          <small className="text-muted" id="sml-txt-size">
                            {" "}
                            17h ago • 1,903 readers{" "}
                          </small>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Collapse>
                <Card.Header className="CardHeader no-border-np">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="1"
                    onClick={this.seeMore}
                    className="h-link"
                  >
                    Show {this.state.seeMore ? "more ˅" : "less ˄"}
                  </Accordion.Toggle>
                </Card.Header>
              </Accordion>
            </ListGroup>
          </Card.Body>
        </Card>

        {/* trending courses */}
        <Card className="mb-2" style={{ width: "18rem" }}>
          <Card.Header className=" pl-2 CardHeader no-border">
            Today's most viewed course
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="no-border pr-0 pl-3 pt-0 listH">
              <Row>
                <Col xs={1} className="pl-2 pr-0 pt-1 sizedT">
                  1.
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">
                    The Six Morning Habits of High Perfor...
                  </a>
                  <br />
                  <small className="text-muted" id="sml-txt-size">
                    {" "}
                    Pete Mockaitis | How to Be Awesome at Your ...{" "}
                  </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="no-border pr-0 pl-3 pt-0 listH">
              <Row>
                <Col xs={1} className="pl-2 pr-0 pt-1 sizedT">
                  2.
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">
                    {" "}
                    Unconscious Bias
                  </a>
                  <br />
                  <small className="text-muted" id="sml-txt-size">
                    {" "}
                    Stacey Gordon{" "}
                  </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="no-border pr-0 pl-3 pt-0 listH">
              <Row>
                <Col xs={1} className=" pl-2 pr-0 pt-1 sizedT">
                  3.
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">
                    Time Management for Busy People
                  </a>
                  <br />
                  <small className="text-muted" id="sml-txt-size">
                    {" "}
                    Madecraft and Samantha Bennett{" "}
                  </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <Card.Footer className="CardFooter no-border-np">
              <a href="http://" className="h-link">
                Show more on LinkedIn Learning{" "}
              </a>
            </Card.Footer>
          </ListGroup>
        </Card>

        {/* image */}
        <Card className="mb-2" style={{ width: "18rem" }}>
          <Card.Body className=" px-1 py-1">
            <img src={pic} alt="" style={{ width: "100%" }} />
          </Card.Body>
        </Card>

        {/* add to your feed */}
        <Card className="mb-2" style={{ width: "18rem" }}>
          <Card.Header className=" pl-2 pr-2 mb-2 CardHeader no-border">
            Add to your feed
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="no-border pr-1 pl-3 pt-0">
              <Row>
                <Col xs={2} className="pl-1 pr-0 pt-1">
                  <FontAwesomeIcon
                    icon={faHashtag}
                    className="hashtag mx-0 my-0"
                  />
                </Col>
                <Col xs={6} className=" pl-1 pr-0 pt-2">
                  <div className="sizedT"> #workingfromhome</div>
                </Col>
                <Col xs={4} className="pl-0 pr-2 pt-2 pb-2">
                  <a href="http" className="Follow-btn">
                    <FontAwesomeIcon icon={faPlus} className="plus" />
                    Follow
                  </a>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="no-border pr-1 pl-3 pt-0">
              <Row>
                <Col xs={2} className="pl-1 pr-0 pt-1">
                  <img
                    src={lady}
                    style={{ width: "42px", height: "42px" }}
                    alt=""
                    className="lady"
                  />
                </Col>
                <Col xs={6} className="pl-1 pr-0 pt-1">
                  <div className="sizedT"> Christine Lagarde </div>
                  <small className="text-muted" id="sml-txt-size">
                    {" "}
                    President of the European Central Bank{" "}
                  </small>
                </Col>
                <Col xs={4} className="pl-0 pr-2 pt-2 pb-2">
                  <a href="http" className="Follow-btn">
                    <FontAwesomeIcon icon={faPlus} className="plus" />
                    Follow
                  </a>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="no-border pr-1 pl-3 pt-0">
              <Row>
                <Col xs={2} className="pl-1 pr-0 pt-1">
                  <FontAwesomeIcon
                    icon={faHashtag}
                    className="hashtag mx-0 my-0"
                  />
                </Col>
                <Col xs={6} className="pl-1 pr-1 pt-2">
                  <div className="sizedT"> #productdesign</div>
                </Col>
                <Col xs={4} className="pl-0 pr-2 pt-2 pb-2">
                  <a href="http" className="Follow-btn">
                    <FontAwesomeIcon icon={faPlus} className="plus" />
                    Follow
                  </a>
                </Col>
              </Row>
            </ListGroup.Item>
            <Card.Footer className="CardFooter no-border-np">
              <a href="http://" className="h-link">
                View all recommendations{" "}
              </a>
            </Card.Footer>
          </ListGroup>
        </Card>

        {/* footer */}

        <Card.Body
          style={{ width: "18rem" }}
          className="pr-0 ft-txt footerbody"
        >
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="no-border">
              <Card.Link className="">About</Card.Link>
              <Card.Link className="">Accessibility</Card.Link>
              <Card.Link className="">Help Center</Card.Link>
            </ListGroup.Item>
            <ListGroup.Item className="px-0 no-border">
              <Card.Link className="ml-0">Privacy & Terms</Card.Link>
              <Card.Link className="">Ad Choices</Card.Link>
              <Card.Link className="">Advertising</Card.Link>
            </ListGroup.Item>
            <ListGroup.Item className="pl-1 pr-0 no-border">
              <Card.Link className="">Business Services</Card.Link>
              <Card.Link className="">Get the LinkedIn app</Card.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Link className="middle">more</Card.Link>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>

        <Card.Footer>LinkedIn Corporation © 2020</Card.Footer>
      </div>
    );
  }
}
