import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className=" row text-white bg-dark mt-3 p-5">
            
                <div className="col-4">
                    <p className="fs-3 mb-3">life<span className="text-danger fw-bold">lab+</span></p>
                    <p> Medical practice A place that offers diagnostic services to the medical profession or general public.
                    These centres are equipped with the required laboratory equipments and trained staff along with medical personnel that assist them in the process of identifying diseases in a patientwho is showing particular symptoms or signs.


                      </p>
                   
                </div>
                <div className="col-4 text-left">
                    <p className="fs-4 mb-3"> Our Services help you</p>
                    <p className="">
                    <i className="fas fa-medal me-2"></i>  
                        Deaily Chackup your body </p>
                    <p className="">
                    <i className="fas fa-medal me-2"></i>
                        try to keep fit ypur body </p>
                    <p className="">
                    <i className="fas fa-medal me-2"></i>
                        prepared you for job Exam</p>
                    
                </div>
                <div className="col-4"> 
                <h4>Contact With Us</h4>
                <div>
                    
                  <div>
                  <i className="fab fa-linkedin fa-2x mx-3"></i>
                  <p>Linkedin</p>
                  </div>
                  <div>
                  <i className="fab fa-instagram-square fa-2x"></i>
                  <p>Instagrem</p>
                  </div>

                    <div>
                    <i className="fab fa-twitter fa-2x mx-3"></i>
                    <p>Twitter</p>
                    </div>
                    </div>
                </div>
                 <div>
                    <p>Copy rights@2021 - LifeLab+ diagnostic centre</p>
            </div>
           
               
        </div>
    );
};

export default Footer;