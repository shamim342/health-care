import React from 'react';
import './about.css'
import Contact from './Contact';
import Target from './Target';

const About = () => {
    return (
        <div>
            <div className="about-heading bg-info">
                LifeLab+ diagnostic centre
            </div>
            <div>
            
            <p className="fs-5 w-75 mx-auto">
            The Healthcare Diagnostic Center started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values
            </p>
            <h3 className="text-center text-success">Our Targets</h3>
            <Target></Target>
            <div className="container mt-3">
            <Contact></Contact>
            </div>
        </div>
            </div>
        
    );
};

export default About;