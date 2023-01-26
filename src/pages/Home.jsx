import React from "react";
import { Link } from "react-router-dom";

import '../styles/Home.css'

const Home = () => {
  return (
        <>
            <div className="links-home">
                <div>
                    <h2 className="title-home">Gestão de Funcionários</h2>
                </div>
                <button>
                    <Link to='/meus-funcionarios' className="links-content">Meus Funcionários</Link>
                </button>
                <button>
                    <Link to='/atualizar-cadastro'className="links-content">Atualizar Cadastro</Link>
                </button>
                <button>
                    <Link to='cadastrar-funcionario' className="links-content">Cadastrar Funcionário</Link>
                </button> 
            </div>
        </>
    )
}

export default Home