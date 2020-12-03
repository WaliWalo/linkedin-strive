import React, { Component } from "react";
import './SideBarRight.css'
import { Card, ListGroup, Row, Col, Accordion, Button } from 'react-bootstrap'
import pic from '../images/dream-job.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle
} from "@fortawesome/free-solid-svg-icons";


export default class SidebarRight extends Component {
  state = {
  seeMore: true
}

  seeMore = () => {
    this.setState({
      seeMore: false,
    });
  };


  render() {
    return <div>
      <Card>
        <Card.Header className="mb-2 pl-2">
          LinkedIn News
             </Card.Header>
        <Card.Body className='px-0 py-0'>
          <ListGroup variant="flush">
            <ListGroup.Item className='no-border pr-0 pl-1'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT">  OECD issues warning for UK economy</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 10h ago • 120 readers </small>
                </Col>
              </Row>

            </ListGroup.Item>
            <ListGroup.Item className='no-border pr-0 pl-3'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT">  Here's who's hiring in the UK</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 6d ago • 8,759 readers </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className='no-border pr-0 pl-3'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT"> Why chess is booming right now</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 2d ago • 7,475 readers </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className='no-border pr-0 pl-3'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT">Tesla set to enter a roaring market</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 1d ago • 34,047 readers </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className='no-border pr-0 pl-3'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT">The biggest merger of 2020?</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 1d ago • 18,200 readers </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <Accordion defaultActiveKey="0">
    <Accordion.Collapse eventKey="1">
                  <ListGroup variant="flush">
            <ListGroup.Item className='no-border pr-0 pl-3'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT">Amazon is adding 2.8K workers a day</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 2d ago • 11,809 readers </small>
                </Col>
              </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className='no-border pr-0 pl-3'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT">Reaching peak "pandemic fatigue"</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 2d ago • 1,729 readers </small>
                </Col>
              </Row>

                  </ListGroup.Item>
                  <ListGroup.Item className='no-border pr-0 pl-3'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT">How to be funny in a job application</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 1d ago • 260 readers </small>
                </Col>
              </Row>

                  </ListGroup.Item>
                  <ListGroup.Item className='no-border pr-0 pl-3'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT">Santa, you're on mute!</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 9h ago • 252 readers </small>
                </Col>
              </Row>

                  </ListGroup.Item>
                  <ListGroup.Item className='no-border pr-0 pl-3'>
              <Row>
                <Col xs={1}>
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11}>
                  <a href="http://" className="sizedT">We may have reached peak oil</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 17h ago • 1,903 readers </small>
                </Col>
              </Row>

                    </ListGroup.Item>
                    </ListGroup>
      
              </Accordion.Collapse>
              <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={this.seeMore}>
        {this.state.seeMore ? "Show more": "Show less"}
      </Accordion.Toggle>
    </Card.Header>
</Accordion>
          </ListGroup>
        </Card.Body>
      </Card>


      {/* trending courses */}
      <Card header className="mb-2">
        Today's trending courses
        <ListGroup variant="flush">
          <ListGroup.Item className='no-border'>
            <a href="http://">  1. topic one</a>
            <br />
            <small className='text-muted'> 10h ago • 120 readers </small>
          </ListGroup.Item>
          <ListGroup.Item className='no-border'>
            <a href="http://">  2. topic two</a>
            <br />
            <small className='text-muted'> 10h ago • 120 readers </small>
          </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://">  3. topic three</a>
            <br />
            <small className='text-muted'> 10h ago • 120 readers </small>
          </ListGroup.Item> ,
  </ListGroup>
      </Card>

      {/* image */}
      <Card header className="mb-2">
        <img src={pic} alt="" style={{ width: "100%" }} />
      </Card>

      {/* add to your feed */}
      <Card header className="mb-2">
        Add to your feed
        <ListGroup variant="flush">
        </ListGroup>
      </Card>
    </div>;

  }
}
