import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './blog.css'

const Blog = (props) => {
    const {url, name,details}=props.blog;
    return (
       <Container>
           <Row  className="custom-blog my-5">
               
               <Col md={5} className="my-auto">
                   <img src={url} alt="" className="custom-img"/>
               </Col>

               <Col md={7}>
                    <h3 className="text-info">{name}</h3>
                    <p>{details}</p>
               </Col>
           </Row>
       </Container>
    );
};

export default Blog;