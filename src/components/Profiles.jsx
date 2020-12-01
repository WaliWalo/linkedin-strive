import React from 'react'
import './Profiles.css'
import { Row, Col, Card, ListGroupItem, Button } from 'react-bootstrap'


class Profiles extends React.Component {
    state = {
        profile: {},
    }

    render() {
    let viewedPeople = [];
    for (let i = 0; i < 5; i++) {
        viewedPeople.push(this.state.profile[Math.floor(Math.random() *this.state.profile.length) + 1])
        console.log(viewedPeople[i])
    };
        return (
            <>
                {
                    viewedPeople.slice(0, 6).map(profile =>
                        <ListGroupItem>
                    <Row>
                        <Col xs={2} className="pl-0 pr-1 my-1">
                        <Card.Img className="profile-img" src={this.state.profile.image} stye={{width: "50px", height: "50px", borderRadius: "50%"}} />
                        </Col>
                        <Col xs={8} className="pl-1 pr-0">
                            <Card.Title className="title">{this.state.profile.name} {this.state.profile.surname}</Card.Title>
                                <Card.Text>
                                    {this.state.profile.title}
                            </Card.Text>
                            
                        </Col>
                        <Col xs={2}>
                        <Button border="secondary" style={{borderRadius: "70%"}}><i class="fab fa-telegram-plane"></i>hello </Button>
                        </Col>
                    </Row>
                                
                            </ListGroupItem>
                    )}
                
                        
            </>
        )
    }
}

export default Profiles