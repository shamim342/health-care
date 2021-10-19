import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/banner_error_404.jpg';

const NotFound = () => {
    return (
        <div>
            <div className="mt-3">
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className='my-4'>
                <Link to="/home">
                    <button className='bg-info'>Back Home page</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;