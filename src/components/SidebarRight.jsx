import React, { Component } from "react";
import './SideBarRight.css'
import { Card, ListGroup } from 'react-bootstrap'
import pic from '../images/dream-job.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle
} from "@fortawesome/free-solid-svg-icons";


export default class SidebarRight extends Component {
  render() {
    return <div>
      <Card header className="mb-2">
        LinkedIn News
        <ListGroup variant="flush">
          <ListGroup.Item className='no-border'>
            <a href="http://"> <FontAwesomeIcon icon={faCircle}/> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item>
    <ListGroup.Item className='no-border'>
            <a href="http://"> <FontAwesomeIcon icon={faCircle}/> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> <FontAwesomeIcon icon={faCircle}/> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> <FontAwesomeIcon icon={faCircle}/> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> <FontAwesomeIcon icon={faCircle}/> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item>
  </ListGroup> 
      </Card>
      

      {/* trending courses */}
      <Card header className="mb-2">
        Today's trending courses
        <ListGroup variant="flush">
          <ListGroup.Item className='no-border'>
            <a href="http://"> <FontAwesomeIcon icon={faCircle}/> 1. topic one</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item>
    <ListGroup.Item className='no-border'>
            <a href="http://"> <FontAwesomeIcon icon={faCircle}/> 2. topic two</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> <FontAwesomeIcon icon={faCircle}/> 3. topic three</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
          </ListGroup.Item>
  </ListGroup> 
      </Card>
      
        {/* image */}
        <Card header className="mb-2">
        <img src={pic} alt="" style={{ width: "100%"}}/>
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
