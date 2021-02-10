import React from 'react'
import key2design from "./../images/portfolio/key2design.png";
import blackman from "./../images/portfolio/blackman.png"
import koutnryCookin from "./../images/portfolio/kountrycookin.png";
import '../stylesheets/portfolio.scss'

export default function Portfolio(props) {


    return (
        <>
            <div id="portfolioContainer" className="container-fluid bg-light">
            <div className="row pt-4 text-center">
                            <h2>My Portfolio</h2>
                        </div>
                        <div className="row py-4 text-center">
                            <span>We want you to be apart of our portfolio too</span>
                        </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8 col-md-6 col-sm-12 ">
                        
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 py-4 ">
                            <div class="col">



                                <div class="card h-100 border-dark">
                                <div class="card-header text-center bg-dark text-light"><h5 class="card-title">KEY2DESIGN</h5></div>
                                    <img src={key2design} class="card-img-top h-100" alt="..." />
                                    
                                    {/* <div class="card-body py-4">
                                        <h6 class="card-title">Full Stack Development</h6>
                                        <p class="card-text py-2">I developed this platform to help promote my brand KEY2DESIGN as a freelance developer. Through this site , I can track open tickets and accept payments.</p>
                                    </div> */}
                                    <div class="card-footer text-center bg-dark">
                                        <small class="text-muted"><a href="www.key2design.io">View website</a></small>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 border-dark">
                                <div class="card-header text-center"><h5 class="card-title">KOUNTRY COOKIN</h5></div>
                                    <img src={koutnryCookin} class="card-img-top h-100" alt="..." />
                                    
                                    {/* <div class="card-body py-4">
                                        <h6 class="card-title">Full Stack Development</h6>
                                        <p class="card-text py-2">Find your favorite recipes by Kountry Cookin. This site features a subscription signup in which users can signup for access to the online recipe book.</p>
                                    </div> */}
                                    <div class="card-footer text-center">
                                        <small class="text-muted"><a href="https://still-hamlet-66612.herokuapp.com/">View website</a></small>
                                    </div>
                                </div>
                            </div>


                        </div>





                    </div>
                    

                </div>
            </div>
        </>
    )
}
