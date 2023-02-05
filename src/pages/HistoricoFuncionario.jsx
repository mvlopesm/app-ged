//Importações React
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

//Importações Estilização
import Header from '../components/Header/Header';
import '../styles/home.css'

import { AiOutlineArrowLeft, AiTwotoneFilePdf } from 'react-icons/ai';

//Importações Banco de Dados
import  firebase from '../firebase.config'
import 'firebase/firestore'

//Importações Components
import allEmployeedPDF from '../Reports/todosFuncionarios'

const HistoricoFuncionario = () => {

    let { id } = useParams();
    
    //UseStates Renderização
    const [funcionario, setFuncionario] = useState([]);


    useEffect(() => {
        let listaFunc = [];

        
        firebase.firestore().collection(`funcionario-${id}`).get()
            .then((resultados) => {
                resultados.docs.forEach((doc) => {
                        {
                            listaFunc.push({
                                id: doc.id,
                                name: doc.data().name,
                                phone: doc.data().phone,
                                sector: doc.data().sector,
                                position: doc.data().position,
                                salary: doc.data().salary,
                                admission: doc.data().admission
                            })

                            console.log(listaFunc)
                        }
                })
                console.log(listaFunc)
                setFuncionario(listaFunc)
            })

    }, []);

    return (
        <>
        <Header/>
        <div className="container">
            <h1 className="mb-5 mt-5">Histórico do Funcionário</h1>
            <div className='col-6 mb-3'>
                <Link to={'/atualizarCadastro/' + id}className='btn btn-color btn-space mb-2'><AiOutlineArrowLeft className='icon-size'/> Voltar para Funcionário</Link>
                <Link></Link>
                <button onClick={() => allEmployeedPDF(funcionarios)} className="btn btn-danger mb-2" type="button" id="button-addon2"><AiTwotoneFilePdf className='icon-size btn-space'/> Gerar PDF</button>
            </div>
            <div>

            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="rowTitle">
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Setor</th>
                    <th scope="col">Cargo</th>
                    <th scope="col" className="col-action">Salário</th>
                    </tr>
                </thead>

                <tbody>
                    {   
                        funcionario.map((funcionario) => {
                            return (
                                <tr key={funcionario.id}>
                                    <td>{funcionario.name}</td>
                                    <td>{funcionario.phone}</td>
                                    <td>{funcionario.sector}</td>
                                    <td>{funcionario.position}</td>
                                    <td>{funcionario.salary}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}

export default HistoricoFuncionario