import React from "react";
import { Link } from "react-router-dom";
import imgMarcaTaugor from '../assets/marca-taugor.png'

const NavBar = () => {
    return (
        <nav id='navbar'>
            <Link to='/'>
                <img src={imgMarcaTaugor} alt="" />
            </Link>
            <Link to='/meus-funcionarios'>Meus Funcionário</Link>
            <Link to='/atualizar-cadastro'>Atualizar Cadastro</Link>
            <Link to='cadastrar-funcionario'>Cadastrar Funcionário</Link>
      </nav>
    )
}

export default NavBar



