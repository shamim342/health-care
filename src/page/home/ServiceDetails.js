import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [singleItem , setSingleItem] = useState([]);
    const history= useHistory();

    const [services] = useFetch();

    const handleTestService=()=>{
      history.push('/itemDetails')
    }

    useEffect(()=>{
       const findItem= services.find(serviceDetails =>serviceDetails.id==serviceId)
       setSingleItem(findItem);
    },[services,serviceId])


    return (
        <div className="container">
            <Row xs={1} md={1} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src={singleItem?.img} />
        <Card.Body>
          <Card.Title>{singleItem?.name}</Card.Title>
          <Card.Text>
              {singleItem?.details}
          </Card.Text>
           <Link to ="/itemDetails">
           <Button variant="outline-danger">
             test
           </Button>
            </Link>

        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
    );
};

export default ServiceDetails;