import React from 'react'
import {Card,Button} from 'react-bootstrap'

const ProfileData = ({profile,handleName,children}) => {
    return (
        <div>
           {
            profile.map(el=><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={children}/>
            <Card.Body>
              <Card.Title>{el.fullName}</Card.Title>
              <Card.Text>
                {el.bio}
              </Card.Text>
              <Card.Text>
                {el.profession}
              </Card.Text>
              <Button variant="primary" onClick={()=>handleName(el.fullName)}>Profile User</Button>
            </Card.Body>
          </Card>)
           } 
        </div>
    )
}

export default ProfileData
