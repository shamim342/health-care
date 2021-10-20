import React from 'react';
import { Accordion } from 'react-bootstrap';

const Target = () => {
    return (
        <div>
             <div className="w-75 mx-auto">
            <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Help you keep fit</Accordion.Header>
    <Accordion.Body>
    annual physical check up to make sure everything is as it should be. There is no harm getting regular check ups as it's good for your own body. Do breast or testicular self-exams and get suspicious moles checked out. Getting exams regularly benefits you because if and when something is abnormal, you will get to know about it timely and can consult with your doctor.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>25% free</Accordion.Header>
    <Accordion.Body>
     
    In covid situation , we are give you 25-50% off!!! all health test .  
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header> detace diseases</Accordion.Header>
    <Accordion.Body>
      We are use all moden technologies mechine . so we can detace any harmful disease very early.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
        </div>
    );
};

export default Target;