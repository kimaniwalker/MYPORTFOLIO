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



                                <div class="card border-dark">

                                    <img src={key2design} class="card-img-top" alt="..." />

                                    <div class="card-body py-4 text-center bg-light">
                                        <h6 class="card-title py-2">Key2design</h6>
                                        <a href="https://www.key2design.io"><btn className="btn btn-primary btn-sm">View Website</btn></a>
                                    </div>
                                    {/* <div class="card-footer text-center bg-dark">
                                        <small class="text-muted"><a href="www.key2design.io">View website</a></small>
                                    </div> */}
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border-dark">

                                    <img src={koutnryCookin} class="card-img-top" alt="..." />

                                    <div class="card-body py-4 text-center bg-light">
                                        <h6 class="card-title py-2">Kountry Cookin</h6>
                                        <a href="https://still-hamlet-66612.herokuapp.com/"><btn className="btn btn-primary btn-sm">View Website</btn></a>
                                    </div>
                                    {/* <div class="card-footer text-center">
                                        <small class="text-muted"><a href="https://still-hamlet-66612.herokuapp.com/">View website</a></small>
                                    </div> */}
                                </div>
                            </div>


                        </div>





                    </div>


                </div>
            </div>
        </>
    )
}
