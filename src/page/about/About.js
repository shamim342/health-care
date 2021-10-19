import React from 'react';
import './about.css'
import Contact from './Contact';
import Target from './Target';

const About = () => {
    return (
        <div>
            <div className="about-heading">
                LifeLab+ diagnostic centre
            </div>
            <div>
            
            <p className="fs-5 w-75 mx-auto">IN covid situation lot of people are getting jobless.
                we are just try , those people can get jobs . Our course are  much related to our real life . It's will help you to getting job and promotion . Those courses will make you <span className="fw-bold">next corporate king</span>.
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