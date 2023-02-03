//Importações React
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

//Importações Estilização
import Header from '../components/Header/Header';
import '../styles/home.css'
import SweetAlert from 'react-bootstrap-sweetalert';
import { AiOutlineSearch, AiOutlineUserAdd, AiTwotoneFilePdf } from 'react-icons/ai';

//Importações Banco de Dados
import  firebase from '../firebase.config'
import 'firebase/firestore'

//Importações Components
import allEmployeedPDF from '../Reports/todosFuncionarios'
import ListaFuncionarios from '../components/ListaFuncionarios/ListaFuncionarios'

const Home = () => {
    
    //UseStates Renderização
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
                                position: doc.data().position,
                                salary: doc.data().salary,
                                admission: doc.data().admission
                            })
                        }
                    }
                    
                })
                setFuncionarios(listaFunc)
            })

    }, [search, dismiss]);

    return (
        <div>
            <Header/>
            <div className='container'>
                <h2 className="mt-5 mb-5">Meus Funcionários</h2>

                <div className='row'>
                    <div className='col-6'>
                        <Link to='/cadastrarFuncionario'className='btn btn-color btn-space'><AiOutlineUserAdd className='icon-size'/> Cadastrar Funcionário</Link>
                        <button onClick={() => allEmployeedPDF(funcionarios)} className="btn btn-danger" type="button" id="button-addon2"><AiTwotoneFilePdf className='icon-size'/> Gerar PDF</button>
                    </div>
                    <div className='col-6'>
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
        </div>
    )
}

export default Home