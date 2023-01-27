import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import imgMarcaTaugor from '../../assets/marca-taugor.png'
import { AiFillHome } from "react-icons/ai";

import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="logo">
                    <Link to='/'>
                        <img src={imgMarcaTaugor} alt="" />
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
                
                <div className="home-button">
                    <Link to = '/'><AiFillHome className="home-icon" /></Link>
                </div>
            </div>
      </nav>
    )
}

export default Header



