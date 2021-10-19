import React from 'react';
import img1 from '../../images/img1.jpg'


const IntoPart = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-6">
                    <img src={img1} className="img-fluid" alt="" />
                </div>
                <div className="col-6 justify-content-center my-auto">
                    <h4>
                    Enjoy complete health checkup And lab test from the safety of your home. Health Check Package 
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default IntoPart;