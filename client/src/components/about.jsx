import React from 'react'
import profilepic from '../images/portfolio/kimani.jpeg'
import resume from '../images/portfolio/resume.pdf'
import '../stylesheets/about.scss'

export default function About(props) {


    return (
        <>
            <div className="container">

                <div className="row gx-5">

                    <div id="aboutCol" className="col-lg-4 col-md-12 col-sm-12">
                        <div className="row justify-content-center py-4">
                            <img id="profile" src={profilepic} width="275"></img>
                        </div>
                        <div className="row text-center py-4">
                            <h2>Kimani Walker</h2>
                            <span className="text-primary">Full Stack Developer / Graphic Designer</span>
                        </div>
                        <div className="row justify-content-center text-center py-4">
                            <div className="col"><a className="text-dark" href={resume} download="Kimani Walker Resume"><i class="bi bi-download"></i></a></div>
                            <div className="col"><a className="text-dark" href="https://www.linkedin.com/in/kimani-walker-571078165/"><i class="bi bi-linkedin"></i></a></div>
                            <div className="col"><a className="text-dark" href="https://github.com/kimaniwalker"><i class="bi bi-github"></i></a>
                            </div>


                        </div>
                    </div>
                    <div id="introCol" className="col-lg-8 col-md-12 col-sm-12 bg-light">
                        <div className="row pt-4">
                            <h2>A Brief Introduction</h2>
                        </div>
                        <div className="row py-4">
                            <span>Welcome, and thank you for visiting my portfolio. It means a lot to me that you took the time out of your day to hear my story. I graduated from Hoover High School in 2013 and attended Troy University shortly after. I am a proud husband and father. Currently I am working as a technical support engineer at SAP Sales Cloud and some freelance work on the side. I love sports and going out to restaurants to try new foods. If I'm not spending time with the kids then most likely I'm locked away in my office coding the day away.</span>
                            <span className="pt-2">I have eight years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript. Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work to all of my employers, including those I've worked for on a project basis.</span>
                        </div>
                        <div className="row py-4">
                            <span>Kimani Walker</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
