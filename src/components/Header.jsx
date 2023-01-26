import React from "react";
import { Link } from "react-router-dom";
import imgMarcaTaugor from '../assets/marca-taugor.png'
import { AiFillHome } from "react-icons/ai";

import './Header.css'

const Header = () => {
    return (
        <nav id='header'>
            <div className="logo">
                <Link to='/'>
                    <img src={imgMarcaTaugor} alt="" />
                </Link>
            </div>

            <div className="links-nav">
                <div>
                    <Link to='/meus-funcionarios'>Meus Funcionários</Link>
                </div>
                <div>
                    <Link to='/atualizar-cadastro'>Atualizar Cadastro</Link>
                </div>
                <div>
                    <Link to='cadastrar-funcionario'>Cadastrar Funcionário</Link>
                </div> 
            </div>
            
            <div className="home-button">
                <Link to = '/'><AiFillHome className="home-icon"/></Link>
            </div>
      </nav>
    )
}

export default Header



