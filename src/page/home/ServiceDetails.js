import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {  useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [singleItem , setSingleItem] = useState([]);

    const [services] = useFetch();

    

    useEffect(()=>{
       const findItem= services.find(serviceDetails =>serviceDetails.id==serviceId)
       setSingleItem(findItem);
    },[services,serviceId])


    return (
        <div className="container w-75 mx-auto mt-3">
            <Row xs={1} md={1} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top"  src={singleItem?.img} />
        <Card.Body>
          <Card.Title className="text-danger fw-bold">{singleItem?.name}</Card.Title>
          <Card.Text >
              {singleItem?.details}
          </Card.Text>
           <Link to ="/applytest">
           
            </Link>

        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
    );
};

export default ServiceDetails;

