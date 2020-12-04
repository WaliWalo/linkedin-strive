import React, { Component } from "react";
import './css/skills.css'
import { Card, ListGroup, Col, Row, Accordion, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen
} from "@fortawesome/free-solid-svg-icons";



export default class Skills extends Component {

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
      
      <Card className=" mt-4" >
        <Card.Body className="pb-0">
  <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col xs={6} className="px-0 fontWeight">Skills & endorsements</Col>
              <Col xs={6} className="text-right px-0 fontWeight"> Add a new skill
               <FontAwesomeIcon icon={faPen} className="penIcon ml-4"/>
                </Col>
              </Row>
              </ListGroup.Item>
            <ListGroup.Item className="px-0" >
              <a href="http://" className="TakeQBtn px-3">take skill quiz</a>
              </ListGroup.Item>
          <ListGroup.Item className="px-0 fontWeight">Computer Science</ListGroup.Item>
          <ListGroup.Item className="px-0 fontWeight">Programming</ListGroup.Item>
          <ListGroup.Item className="px-0 fontWeight">Responsive Web Design</ListGroup.Item>
           
          </ListGroup>
        </Card.Body>
          <Accordion defaultActiveKey="0" >
            <Card className="acc-border">
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                  <ListGroup variant="flush">
            <ListGroup.Item className=''>
              <Row>
                <Col  className="px-0">
                  <p className="muted-size">Industry Knowledge</p>
                </Col>
              </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className='bottomB'>
              <Row className="pb-3 fontWeight">
                <Col xs={6} className="px-0">
                  User Experience Design (UED)
                </Col>
                <Col xs={6} className="pl-3">
                  Front-end Development
                </Col>
                    </Row>
                    <Row className="fontWeight">
                <Col xs={6} className="px-0">
                  Software Development
                </Col>
                <Col xs={6} className="px-0">
                  
                </Col>
                    </Row>
                    </ListGroup.Item>
 <ListGroup.Item className=''>
              <Row>
                <Col  className="px-0">
                 <p className="muted-size">Tools & Technologies</p>
                </Col>
              </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className='bottomB'>
              <Row className="pb-3 fontWeight">
                <Col xs={6} className="px-0">
                 Cascading Style Sheets (CSS)
                </Col>
                <Col xs={6} className="pl-3">
                  ECMAScript
                </Col>
                    </Row>
                    <Row className="fontWeight">
                <Col xs={6} className="px-0 ">
                  JavaScript
                </Col>
                <Col xs={6} className="pl-3 ">
                  REST APIs
                </Col>
                    </Row>
                  </ListGroup.Item>
                   <ListGroup.Item className=''>
              <Row>
                <Col  className="px-0">
                  <p className=" muted-size">Other Skills</p>
                </Col>
              </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className='bottomB'>
              <Row className="pb-3 fontWeight">
                <Col xs={6} className="px-0 ">
                  Async
                </Col>
                <Col xs={6} className="pl-3 ">
                  Application Programming Interfaces
                </Col>
                    </Row>
                    <Row className="fontWeight">
                <Col xs={6} className="px-0 ">
                  Back-End Web Development
                </Col>
                <Col xs={6} className="px-0">
                  
                </Col>
                    </Row>
                    </ListGroup.Item>
                    </ListGroup>
      </Card.Body>
              </Accordion.Collapse>
              <Card.Header  className="CardHeader ">
      <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={this.seeMore} className="h-link">
                 Show {this.state.seeMore ? "more ˅" : "less ˄" }
      </Accordion.Toggle>
    </Card.Header>
         </Card> </Accordion>
        
</Card>
      
</div>;
  }
}
