
import React from 'react';
import './topbanner.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TopBanner = () => {
    const [searchQuery , setSearchQuery] = useState(null)
    const getQuery = e => setSearchQuery(e.target.value);
    return (
        <section className="banner d-flex align-items-center text-center">
            <div className="container">
                <h1 className="text-danger" style={{fontSize:'50px',fontWeight:'bold'}}>Enjoy complete diagnostics Services From Home</h1>
                
                <div className="search-box col-md-6 my-5 mx-auto">
                    <input id="query" onChange={getQuery} type="text" className="form-control" placeholder="Search here" />
                    <Link to={"/search="+searchQuery}>
                        <button onClick={() => window.scrollBy(0, 500)} className="btn btn-danger search-btn btn-rounded">Search</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;
