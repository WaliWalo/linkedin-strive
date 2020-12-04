import React, { Component } from "react";
import { Card, ListGroup, Col, Row, Accordion, Button } from 'react-bootstrap'

export default class Interests extends Component {
  render() {
    return <div>
      <Card className="my-3">
        <ListGroup>
          <ListGroup.Item className=''>
              <Row>
                <Col  className="px-0">
                  <p className=" muted-size">Interests</p>
                </Col>
              </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className='bottomB'>
              <Row className="pb-3 fontWeight">
                <Col xs={6} className="px-2 ">
                <img src="http://placehold.it/56x56" alt="" className="mr-2"/>
                 Strive School
                
                  <small className='text-muted' id='sml-txt-size'>  1,186 followers </small>
                </Col>
                <Col xs={6} className="pl-2 ">
                <img src="http://placehold.it/56x56" alt="" className="mr-2"/>
                  Google
                
                  <small className='text-muted' id='sml-txt-size'> 19,988,831 followers </small>
                </Col>
                    </Row>
                    <Row className="pb-3 fontWeight">
                <Col xs={6} className="px-2 ">
                <img src="http://placehold.it/56x56" alt="" className="mr-2"/>
                 Bill Gats
                
                  <small className='text-muted' id='sml-txt-size'> 30,575,244 followers </small>
                </Col>
                <Col xs={6} className="px-2">
                <img src="http://placehold.it/56x56" alt="" className="mr-2"/>
                  Stack Overflow
                
                  <small className='text-muted' id='sml-txt-size'> 585,997 followers </small>
                </Col>
            </Row>
            <Row className="fontWeight">
              <Col xs={6} className="px-2 ">
                <img src="http://placehold.it/56x56" alt="" className="mr-2"/>
                  Lloyds Banking Group
                
                  <small className='text-muted' id='sml-txt-size'> 273,628 followers </small>
                </Col>
                <Col xs={6} className="px-0">
                  
                </Col>
                    </Row>
                    </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>;
  }
}
