import ListaFuncionarios from '../components/ListaFuncionarios/ListaFuncionarios'
import React, { useEffect, useState } from "react";

import '../styles/home.css'
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineUserAdd } from 'react-icons/ai';

import  firebase from '../firebase.config'
import 'firebase/firestore'

const Home = () => {

    const [funcionarios, setFuncionarios] = useState([])
    const [search, setSearch] = useState ('')

    useEffect(() => {
        let listaFunc = [];
        
        firebase.firestore().collection('funcionarios').get()
            .then((resultados) => {
                resultados.docs.forEach((doc) => {
                    if(doc.data().name.indexOf(search) >= 0) {
                        {
                            listaFunc.push({
                                id: doc.id,
                                name: doc.data().name,
                                sector: doc.data().sector,
                                position: doc.data().position
                            })
                        }
                    }
                    
                })
                setFuncionarios(listaFunc)
            })

    }, [search]);

    return (
        <div className='container'>
            <h2 className="mt-5 mb-5">Meus Funcionários</h2>

            <div className='row'>
                <div className='col-4'>
                    <Link to='/cadastrarFuncionario'className='btn btn-color'><AiOutlineUserAdd className='icon-size'/> Cadastrar Funcionário</Link>
                </div>
                <div className='col -8'>
                    <div className="input-group mb-3">
                        <input onChange={(e)=> {setSearch(e.target.value)}} type="text" className="form-control" placeholder="Pesquisar Funcionário" aria-describedby="button-addon2"/>
                        <button className="btn btn-color" type="button" id="button-addon2"><AiOutlineSearch className='icon-size'/> Pesquisar</button>
                    </div>
                </div>
            </div>
                        
            <ListaFuncionarios arrayFuncionarios={funcionarios}/>
        </div>
    )
}

export default Home