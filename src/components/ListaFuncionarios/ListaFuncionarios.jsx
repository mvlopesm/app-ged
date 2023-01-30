import React, { useEffect, useState } from "react";
import './ListaFuncionarios.css';

import { getFirestore } from 'firebase/firestore'
import app from "../../../firebase";
import { collection, getDocs } from "firebase/firestore"; 
import { AiOutlineUserAdd, AiOutlineSearch, AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";




const ListaFuncionarios = () => {

    const [funcionarios, setFuncionarios] = useState([])
    const [search, setSearch] = useState ('')

    let listaFunc = [];


    const db = getFirestore(app)
    useEffect(() => {
        getDocs(collection(db, 'funcionarios')).then((dados) => {
            dados.docs.forEach((doc) => {
                if (doc.data().name.indexOf(search) >= 0) {
                    listaFunc.push({
                        id: doc.data().id,
                        name: doc.data().name,
                        sector: doc.data().sector,
                        position: doc.data().position
                    });
                }
            });
            setFuncionarios(listaFunc)
        })
    }, [search]);

    const deleteFuncionario = (id) => {
        alert("Usuario Exluído: " + id) 
    }

    return (
        <div className="container">

            <div className='row'>
                <div className='col-4'>
                    <Link to='cadastrarFuncionario'className='btn btn-color'><AiOutlineUserAdd className='icon-size'/> Cadastrar Funcionário</Link>
                </div>
                <div className='col -8'>
                    <div className="input-group mb-3">
                        <input onChange={(e)=> {setSearch(e.target.value)}} type="text" className="form-control" placeholder="Pesquisar Funcionário" aria-describedby="button-addon2"/>
                        <button className="btn btn-color" type="button" id="button-addon2"><AiOutlineSearch className='icon-size'/> Pesquisar</button>
                    </div>
                </div>
            </div>

            <table className="table table-hover table-bordered tableFunc">
                <thead>
                    <tr className="rowTitle">
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Setor</th>
                    <th scope="col">Cargo</th>
                    <th scope="col" className="col-action">Editar / Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {   
                        funcionarios.map((funcionario) => {
                            return (
                                <tr key={funcionario.id}>
                                    <th scope="row">{funcionario.id}</th>
                                    <td>{funcionario.name}</td>
                                    <td>{funcionario.sector}</td>
                                    <td>{funcionario.position}</td>
                                    <td>
                                        <Link to=''><AiFillEdit className="icon-action"/></Link>
                                        <Link to='' onClick={() => {deleteFuncionario(funcionario.id)}}><AiTwotoneDelete className="icon-action red"/></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListaFuncionarios

