//Importações React
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Importações Estilização
// @ts-ignore
import imgMarcaTaugor from '../../assets/marca-taugor.png'
import { AiFillHome } from "react-icons/ai";
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
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="logo">
                    <Link to='/'>
                        <img src={imgMarcaTaugor} alt="" />
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item item-navigation nav-link active"><Link to = '/cadastrarFuncionario'>Cadastrar Funcionário</Link> </li>
                        <li className="nav-item item-navigation nav-link active"><a className="logout" onClick={Logout}>Sair</a></li>
                    </ul>
                </div>
                
                <div className="home-button">
                    <Link to = '/'><AiFillHome className="home-icon" /></Link>
                </div>
            </div>
      </nav>
    )
}

export default Header



