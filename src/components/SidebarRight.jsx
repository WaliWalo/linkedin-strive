import React, { Component } from "react";
import './SideBarRight.css'
import { Card, ListGroup } from 'react-bootstrap'
import  pic from '../images/dream-job.jpg'


export default class SidebarRight extends Component {
  render() {
    return <div>
      <Card header className="mb-2">
        LinkedIn News
        <ListGroup variant="flush">
          <ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item>
    <ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
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
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item>
    <ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
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
        LinkedIn News
        <ListGroup variant="flush">
          <ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item>
    <ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item><ListGroup.Item className='no-border'>
            <a href="http://"> OECD issues warning for UK economy</a>
            <br / >
             <small className='text-muted'> 10h ago • 120 readers </small>
            </ListGroup.Item>
  </ListGroup> 
        </Card>
    </div>;

  }
}
