import React from "react";
import './ListaFuncionarios.css';

import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ListaFuncionarios = (props) => {    

    return (
        <div>

            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="rowTitle">
                    <th scope="col">Nome</th>
                    <th scope="col">Setor</th>
                    <th scope="col">Cargo</th>
                    <th scope="col" className="col-action">Editar / Demitir </th>
                    </tr>
                </thead>

                <tbody>
                    {   
                        props.arrayFuncionarios.map((funcionario) => {
                            return (
                                <tr key={funcionario.id}>
                                    <td>{funcionario.name}</td>
                                    <td>{funcionario.sector}</td>
                                    <td>{funcionario.position}</td>
                                    <td>
                                        <Link to={'/atualizarCadastro/' + funcionario.id}><AiFillEdit className="icon-action"/></Link>
                                        <Link to='' onClick={() => {props.clickDismiss(funcionario.id)}}><AiTwotoneDelete className="icon-action red"/></Link>
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

