import React from "react";
import { Link } from "react-router-dom";
import imgMarcaTaugor from '../assets/marca-taugor.png'
import { AiFillHome } from "react-icons/ai";

import './Navbar.css'

const NavBar = () => {
    return (
        <nav id='navbar'>
            <div className="logo">
                <Link to='/'>
                    <img src={imgMarcaTaugor} alt="" />
                </Link>
            </div>

            <div className="links-nav">
                <div>
                    <Link to='/meus-funcionarios'>Meus Funcionário</Link>
                </div>
                <div>
                    <Link to='/atualizar-cadastro'>Atualizar Cadastro</Link>
                </div>
                <div>
                    <Link to='cadastrar-funcionario'>Cadastrar Funcionário</Link>
                </div> 
            </div>
            
            <div className="home-button">
                <AiFillHome className="home-icon"/>
            </div>
      </nav>
    )
}

export default NavBar



