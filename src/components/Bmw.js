import React from 'react'
import Bmw2 from '../images/bmwm3.jpeg' // importamos imagen y le ponemos un nombre

const Bmw = () => {
    return (
        <div className="container">
            <img src={Bmw2} alt="" className="imagen" />  
        </div>
    )
}

export default Bmw