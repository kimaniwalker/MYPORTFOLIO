import React from 'react'
import { btn } from './../stylesheets/modules/Button.module.scss'

export default function Button(props) {
    

    return (
        <>
           <button
        className={btn}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        I am button 2 - Press Me
      </button> 
        </>
    )
}
