
import React from 'react';
import './topbanner.css'
import { useState } from 'react';

const TopBanner = () => {
    const [searchQuery , setSearchQuery] = useState(null)
    const getQuery = e => setSearchQuery(e.target.value);
    return (
        <section className="banner d-flex align-items-center text-center">
            <div className="container">
                <h1 className="text-danger" style={{fontSize:'2.5rem',fontWeight:'bold'}}>Enjoy complete  Services From Home</h1>
                
                <div className="search-box col-md-6 my-5 mx-auto">
                    <input id="query" onChange={getQuery} type="text" className="form-control" placeholder="Search here" />
                        <button  className="btn btn-danger search-btn btn-rounded">Search</button>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;
