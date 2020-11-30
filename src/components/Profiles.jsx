import React from 'react'
import {Card, Button} from 'react-bootstrap'

class Profiles extends React.Component {
    state = {
        profile : this.props.profiles,
    }
    render() {
        const { profile } = this.state
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                        <Card.Img variant="top" src={profile.image} style={{width: '80px', height: '80px'}} />
                        <Card.Title>{profile.name} &nbsp; {profile.surname }</Card.Title>
                        <Card.Text>
                            {profile.title}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default Profiles