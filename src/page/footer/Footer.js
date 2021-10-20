import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className=" text-white bg-dark mt-3 p-5">
            
               <div className="row">
               <div className="col-12 col-md-6">
                    <p className="fs-3 mb-3"><span className="text-danger fw-bold">Life</span> lab+</p>
                    <p> WE CARE YOUR HEALTH AND CHECKUP WITH BEST Technology Popular Diagnostic Centre Ltd. has a collection of the most advanced medical technologies  

                      </p>
                    <div>
                    <i className="fab fa-facebook-square fa-2x  "></i>
                    <i className="fab fa-linkedin fa-2x mx-3"></i>
                    <i className="fab fa-instagram-square fa-2x"></i>
                    <i className="fab fa-twitter fa-2x mx-3"></i>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-left ">
                    <p className="fs-4 mb-3"> Our Services help you</p>
                    <p className="">
                    <i className="fas fa-medal me-2"></i>  
                        Make you keep fit</p>
                    <p className="">
                    <i className="fas fa-medal me-2"></i>
                        25% free all fee </p>
                    <p className="">
                    <i className="fas fa-medal me-2"></i>
                        Detacet desises</p>
                    
                </div>
               </div>
                 <div className="mt-3">
                    <p>Copy rights@2021 - lifeLab diagonestic center</p>
            </div>
           
               
        </div>
    );
};

export default Footer;