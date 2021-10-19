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
        We make our all courese specially . Our courses definitely improve and increase your Knowledge area . This course gives you easy access to the invaluable learning techniques used by experts in art, music, literature, math, science, sports, and many other disciplines.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>25% free</Accordion.Header>
    <Accordion.Body>
     
    This course gives you easy access to the invaluable learning techniques used by experts in art, music, literature, math, science, sports, and many other disciplines. We’ll learn about how the brain uses two very different learning modes and how it encapsulates (“chunks”) information. We’ll also cover illusions of learning, memory techniques, dealing with procrastination, and best practices shown by research to be most effective in helping you master tough subjects. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Prepared for Jobs Exam</Accordion.Header>
    <Accordion.Body>
    This course gives you easy access to the invaluable learning techniques used by experts in art, music, literature, math, science, sports, and many other disciplines. We’ll learn about how the brain uses two very different learning modes and how it encapsulates (“chunks”) information. We’ll also cover illusions of learning, memory techniques, dealing with procrastination, and best practices shown by research to be most effective in helping you master tough subjects
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
        </div>
    );
};

export default Target;