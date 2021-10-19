import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Services = (props) => {
    const {img , name , details,id} = props.service;
    const history = useHistory()
    const handleDetails =()=>{
        history.push(`/serviceDetails/${id}`);
    }
    return (
        <div>
             <Col>
      <Card>
        <Card.Img variant="top" className="img-fluid" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              {details.slice(0,50)}
          </Card.Text>
          <Button onClick={handleDetails} variant="outline-success">Service Details</Button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Services;