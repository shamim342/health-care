import React from 'react';
import img from '../../images/img1.jpg';

const Section = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-md-6">
                <p>A medical diagnostic center is a facility that has equipment and and supplies to do x-rays, specialized tests, blood and urine cultures etc</p>
            </div>
        </div>
    );
};

export default Section;