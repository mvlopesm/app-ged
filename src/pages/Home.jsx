import ListaFuncionarios from '../components/ListaFuncionarios/ListaFuncionarios'
import React from "react";

import '../styles/home.css'


const Home = () => {
    return (
        <div className='container'>
            <h2 className="mt-5 mb-5 titulo-home">Meus Funcionários</h2>            
            <ListaFuncionarios/>
        </div>
    )
}

export default Home