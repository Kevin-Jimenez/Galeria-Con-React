import React from 'react'
import {Link} from "react-router-dom"
import Bmw3 from '../images/bmwm3.jpeg'
import Cadillac3 from '../images/cadillac.jpg'
import Ford3 from '../images/ford.jpg'
import Mustang3 from '../images/mustang.jpg'
import Rollsroyce3 from '../images/rollsroyce.jpg'
import Rover3 from '../images/rover.jpg'

const Navegacion = () => {
    return (
        <div className="container mt-3 padre">
            <Link to="/Bmw" className="links">  
                <figure>
                    <img src={Bmw3} alt="" className="tamaño-img" />
                    <figcaption>Bmw</figcaption>
                </figure>
            </Link>

            <Link to="/Cadillac" className="links">
                <figure>
                    <img src={Cadillac3} alt="" className="tamaño-img" />
                    <figcaption>Cadillac</figcaption>
                </figure>
            </Link>

            <Link to="/Ford" className="links">
                <figure>
                    <img src={Ford3} alt="" className="tamaño-img"/>
                    <figcaption>Ford</figcaption>
                </figure>
            </Link>

            <Link to="/Mustang" className="links">
                <figure>
                    <img src={Mustang3} alt="" className="tamaño-img" />
                    <figcaption>Mustang</figcaption>
                </figure>
            </Link>

            <Link to="Rollsroyce" className="links">
                <figure>
                    <img src={Rollsroyce3} alt="" className="tamaño-img" />
                    <figcaption>Rolls Royce</figcaption>
                </figure>
            </Link>

            <Link to="/Rover" className="links">
                <figure>
                    <img src={Rover3} alt="" className="tamaño-img"/>
                    <figcaption>Range Rover</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion
