import React from 'react';
import img from "../../images/bg.jpg"

const Contact = () => {
    return (
        <div>
             <div className="row">
            <div className="col-12 col-md-6">
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-md-6">
                <h2>Contact us</h2>
                <div>
                <i className="fas fa-envelope-open-text fa-2x "></i>
                <p> Email : life-lab@email.com</p>
                </div>
                <div>
                <i className="fab fa-twitter fa-2x"></i>
                <p> Twitter : @life-lab</p>
                </div>
                <div>
                <i className="fab fa-linkedin fa-2x"></i>
                <p> Linkedin: life-lab</p>
                </div>
                <div>
                <i className="fas fa-phone-volume fa-2x"></i>
                <p> Phone : 90000000</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;