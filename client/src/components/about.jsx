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
                            <span>Welcome, and thank you for visiting my portfolio. It means alot to me that you took the time out of your day to hear my story. Without any further adieu , I introduce me to you . I graduated from Hoover High School in 2013. After attending Troy Univesity for two years I decided to move back to Birmingham, AL.  I am a proud husband and father of 3 beautiful girls. They bring so much joy to my life and give me a purpose bigger than myself. Currrently I am working as a technical support engineer at SAP Sales Cloud and some freelance work in my community. I love sports and going out to restaraunts to try new foods. If im not spending time with the kids then most likely im locked away in my office coding the day away. </span>
                            <span className="pt-2">I love front and back end development. I primarily code all of my apps in React & NodeJs. I work with expressJS on the backend and MySQL to hold my data. To style my components , I use bootstrap and take advantage of its great flex and grid properties. I hope that by visiting my portfolio you get the impression that I really am passionate about coding. Please leave a comment in the container below. We would love to hear from you. If you are interested in a estimate, you can also leave a comment here. I will follow up with 1-2 business days.</span>
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
