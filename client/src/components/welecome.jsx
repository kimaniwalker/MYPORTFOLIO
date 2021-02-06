import React from 'react'
import About from './about'
import Contact from './contact'
import Footer from './footer'

import Header from './header'
import Portfolio from './portfolio'

export default function Welecome(props) {
    

    return (
        <>  <div className="container-fluic">
            <Header />
            </div>
            <div className="container py-4">
                <About />
            </div>
            <div className="container-fluid">
                <Portfolio />
            </div>
            <div className="container py-4">
                <div className="row justify-content-center">
                <Contact />
                </div>
                
            </div>
            
            <Footer />
            
            
        </>
    )
}
