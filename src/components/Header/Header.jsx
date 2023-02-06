//Importações React
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Importações Estilização
// @ts-ignore
import imgMarcaTaugor from '../../assets/marca-taugor.png'
import { AiOutlineMenu } from "react-icons/ai";
import './Header.css'

//Importações Banco de Dados
import { AuthContext } from "../../Context/auth";

const Header = () => {

    // @ts-ignore
    const {setLogged} = useContext(AuthContext)

    const Logout = () => {
        setLogged(false)
        localStorage.removeItem('logged')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="logo navbar-brand">
                    <Link to='/'>
                        <img src={imgMarcaTaugor} alt="" className="testeTeste"/>
                    </Link>
                    <button className="navbar-toggler menu-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item item-navigation mb-2 mt-2"> <Link className="active" to = '/' >Home</Link></li>
                        <li className="nav-item item-navigation mb-2 mt-2"><Link className="active" to = '/cadastrarFuncionario'>Cadastrar Funcionário</Link> </li>
                        <li className="nav-item item-navigation mb-2 mt-2"><a className="logout active" onClick={Logout}>Sair</a></li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Header



