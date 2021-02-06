import React from 'react'
import '../stylesheets/banner.scss'

export default function Banner(props) {
    

    return (
        <>
            <div id="banner" className="container-fluid bg-light">
                <div id="bannerRow" className="row align-items-center text-light">
                    <div className="col">
                        <h1>Hello. Im A Full Stack Web Developer</h1>
                        <h6 className="text-success">Scroll down to learn more about me</h6>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
