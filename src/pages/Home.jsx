import ListaFuncionarios from '../components/ListaFuncionarios/ListaFuncionarios'
import React, { useEffect, useState } from "react";

import '../styles/home.css'
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineUserAdd } from 'react-icons/ai';

import  firebase from '../firebase.config'
import 'firebase/firestore'

import SweetAlert from 'react-bootstrap-sweetalert';

const Home = () => {

    const [funcionarios, setFuncionarios] = useState([]);
    const [search, setSearch] = useState ('');
    const [dismiss, setDismiss] = useState('');
    const [dismissConfirmation, setDismissConfirmation] = useState(false)
    const [confirmationDismissId, setConfirmationDismissId] = useState('')

    const dismissFuncionario = (id) => {
        firebase.firestore().collection('funcionarios').doc(id).delete().then(() => {
            setDismiss(id)
            setDismissConfirmation(false)
        })
    }

    const dismissFuncionarioConfirmation = (id) => {
        setConfirmationDismissId(id)
        setDismissConfirmation(true)
    }

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

    }, [search, dismiss]);

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
                        
            <ListaFuncionarios arrayFuncionarios={funcionarios} clickDismiss={dismissFuncionarioConfirmation}/>

            {
            // @ts-ignore
            dismissConfirmation ? <SweetAlert
                                        warning
                                        showCancel
                                        showCloseButton
                                        confirmBtnText="Sim"
                                        confirmBtnBsStyle="danger"
                                        cancelBtnText= 'Não'
                                        cancelBtnBsStyle='light'
                                        title="Demissão"
                                        onConfirm={() => dismissFuncionario(confirmationDismissId)}
                                        onCancel={() => setDismissConfirmation(false)}
                                        focusCancelBtn
                                        >
                                        Deseja demitir o funcionário ?
                                    </SweetAlert> : null
            }

        </div>
    )
}

export default Home