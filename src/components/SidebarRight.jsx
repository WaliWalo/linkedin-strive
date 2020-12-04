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
      <Card className="mb-2 sidebarR">
        <Card.Header className=" pl-2 CardHeader no-border">
          LinkedIn News
             </Card.Header>
        <Card.Body className='px-0 py-0'>
          <ListGroup variant="flush">
            <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0" >
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0" >
                  <a href="http://" className="sizedT">  OECD issues warning for UK economy</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 10h ago • 120 readers </small>
                </Col>
              </Row>

            </ListGroup.Item>
            <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0" >
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">  Here's who's hiring in the UK</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 6d ago • 8,759 readers </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0">
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT"> Why chess is booming right now</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 2d ago • 7,475 readers </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0">
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">Tesla set to enter a roaring market</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 1d ago • 34,047 readers </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0">
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">The biggest merger of 2020?</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 1d ago • 18,200 readers </small>
                </Col>
              </Row>
            </ListGroup.Item>
            <Accordion defaultActiveKey="0">
    <Accordion.Collapse eventKey="1">
                  <ListGroup variant="flush">
            <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0">
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">Amazon is adding 2.8K workers a day</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 2d ago • 11,809 readers </small>
                </Col>
              </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0">
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">Reaching peak "pandemic fatigue"</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 2d ago • 1,729 readers </small>
                </Col>
              </Row>

                  </ListGroup.Item>
                  <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0">
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">How to be funny in a job application</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 1d ago • 260 readers </small>
                </Col>
              </Row>

                  </ListGroup.Item>
                  <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0 pb-1">
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">Santa, you're on mute!</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 9h ago • 252 readers </small>
                </Col>
              </Row>

                  </ListGroup.Item>
                  <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
              <Row>
                <Col xs={1} className="px-0">
                  <FontAwesomeIcon icon={faCircle} className="circleIcon" />
                </Col>
                <Col xs={11} className="px-0">
                  <a href="http://" className="sizedT">We may have reached peak oil</a>
                  <br />
                  <small className='text-muted' id='sml-txt-size'> 17h ago • 1,903 readers </small>
                </Col>
              </Row>

                    </ListGroup.Item>
                    </ListGroup>
      
              </Accordion.Collapse>
              <Card.Header  className="CardHeader no-border-np">
      <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={this.seeMore} className="h-link">
        {this.state.seeMore ? "Show more": "Show less"}
      </Accordion.Toggle>
    </Card.Header>
</Accordion>
          </ListGroup>
        </Card.Body>
      </Card>


      {/* trending courses */}
      <Card className="mb-2">
        <Card.Header className=" pl-2 CardHeader no-border">
          Today's most viewed course
             </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
            <Row>
              <Col xs={1} className="pl-2 pr-0 pt-1 sizedT">
                1.
              </Col>
              <Col xs={11} className="px-0">
                <a href="http://" className="sizedT">The Six Morning Habits of High Perfor...</a>
            <br />
            <small className='text-muted'id='sml-txt-size'> Pete Mockaitis | How to Be Awesome at Your ... </small>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
            <Row>
              <Col xs={1} className="pl-2 pr-0 pt-1 sizedT">2.</Col>
              <Col xs={11} className="px-0">
                <a href="http://" className="sizedT"> Unconscious Bias</a>
            <br />
                <small className='text-muted'id='sml-txt-size'> Stacey Gordon </small>
              </Col>
            </Row>
            
          </ListGroup.Item>
          <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
            <Row>
              <Col xs={1} className=" pl-2 pr-0 pt-1 sizedT" >3.</Col>
              <Col xs={11} className="px-0">
              <a href="http://" className="sizedT">Time Management for Busy People</a>
              <br />
              <small className='text-muted'id='sml-txt-size'> Madecraft and Samantha Bennett </small>
              </Col>
            </Row>
          </ListGroup.Item>
          <Card.Footer className="CardFooter no-border-np">
          <a href="http://" className="h-link">Show more on LinkedIn Learning </a>
        </Card.Footer>
        </ListGroup>
        
        
      </Card>
      

      {/* image */}
      <Card className="mb-2">
        <Card.Body className=" px-1 py-1">
        <img src={pic} alt="" style={{ width: "100%" }} />
      </Card.Body>
      </Card>
      

      {/* add to your feed */}
      <Card>
      <Card.Header className=" pl-2 CardHeader">
          Add to your feed
        <ListGroup variant="flush">
                      <ListGroup.Item className='no-border pr-0 pl-3 pt-0'>
            <Row>
              <Col xs={1} className=" pl-1 pr-0">3.</Col>
              <Col xs={11} className="px-0">
              <a href="http://" className="sizedT">Time Management for Busy People</a>
              <br />
              <small className='text-muted'id='sml-txt-size'> Madecraft and Samantha Bennett </small>
              </Col>
            </Row>
          </ListGroup.Item>
            <Card.Footer className="CardFooter no-border-np">
          <a href="http://" className="h-link">View all recommendations </a>
        </Card.Footer>
        </ListGroup>
        </Card.Header>
      </Card>
    </div>;

  }
}
