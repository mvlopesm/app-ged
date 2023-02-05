//Importações React
import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

//Importações Estilização
// @ts-ignore
import imgProfile  from '../assets/profile.png';
import Header from "../components/Header/Header";
import '../styles/AtualizarCadastro.css'

//Importações Banco de Dados
import 'firebase/firestore'
import firebase from "../firebase.config";
import { AiTwotoneFilePdf } from "react-icons/ai";
import { RiFolderHistoryLine } from "react-icons/ri";

import employeeById from '../Reports/funcionarioPorId'



const AtualizarCadastro = (props) => {

    const db = firebase.firestore();
    let { id } = useParams();

    const [screen, setScreen] = React.useState<number>(0);
    const [message, setMessage] = useState ('');
    const [success, setSuccess] = useState ('');
    const [employeeInformation, setEmployeeInformation] = useState([]);

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [imgURL ,setImgURL] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    const [position, setPosition] = useState('');
    const [admission, setAdmission] = useState('');
    const [sector, setSector] = useState('');
    const [salary, setSalary] = useState('');
    
    let employeeInfo = []

    useEffect (() => {
        firebase.firestore().collection('funcionarios').doc(id).get().then((results) => {
            setName(results.data().name)
            setGenre(results.data().genre)
            setImgURL(results.data().imgURL)
            setAddress(results.data().address)
            setPhone(results.data().phone)
            setBirthdayDate(results.data().birthdayDate)
            setPosition(results.data().position)
            setAdmission(results.data().admission)
            setSector(results.data().sector)
            setSalary(results.data().salary)

            employeeInfo.push({
                name: results.data().name,
                genre : results.data().genre,
                imgURL : results.data().imgURL,
                address : results.data().address,
                phone : results.data().phone,
                birthdayDate : results.data().birthdayDate,
                position: results.data().position,
                admission : results.data().admission,
                sector : results.data().sector,
                salary: results.data().salary,
            })
        })
        setEmployeeInformation(employeeInfo)
    }, [])

    // Funções para Atualização do PDF em tempo real

    const newSetAddress = (e) => {
        setAddress(e.target.value)
        employeeInfo.push({
            name: name,
            genre : genre,
            imgURL : imgURL,
            address : address,
            phone : phone,
            birthdayDate : birthdayDate,
            position: position,
            admission : admission,
            sector : sector,
            salary: salary,
        })
        setEmployeeInformation(employeeInfo)
    }

    const newSetPhone = (e) => {
       
        {setPhone(e.target.value)}

        employeeInfo.push({
            name: name,
            genre : genre,
            imgURL : imgURL,
            address : address,
            phone : phone,
            birthdayDate : birthdayDate,
            position: position,
            admission : admission,
            sector : sector,
            salary: salary,
        })
        setEmployeeInformation(employeeInfo)
    }

    const newSetPosition = (e) => {

        {setPosition(e.target.value)}

        employeeInfo.push({
            name: name,
            genre : genre,
            imgURL : imgURL,
            address : address,
            phone : phone,
            birthdayDate : birthdayDate,
            position: position,
            admission : admission,
            sector : sector,
            salary: salary,
        })
        setEmployeeInformation(employeeInfo)
    }

    const newSetSector = (e) => {
        {setSector(e.target.value)}

        employeeInfo.push({
            name: name,
            genre : genre,
            imgURL : imgURL,
            address : address,
            phone : phone,
            birthdayDate : birthdayDate,
            position: position,
            admission : admission,
            sector : sector,
            salary: salary,
        })
        setEmployeeInformation(employeeInfo)
    }

    const newSetSalary = (e) => {

        {setSalary(e.target.value)}

        employeeInfo.push({
            name: name,
            genre : genre,
            imgURL : imgURL,
            address : address,
            phone : phone,
            birthdayDate : birthdayDate,
            position: position,
            admission : admission,
            sector : sector,
            salary: salary,
        })
        setEmployeeInformation(employeeInfo)
    }
    
    //Funções dos botoẽs de páginas

    const handleNavigateToContatoPrevius = () => {
        if (screen === 0) return
        setScreen(state => state - 1)
    }

    const handleNavigateToContatoNext = () => {
        if (screen === 1) return
        setScreen(state => state + 1)
    }

    const handleSubmit = () => {
        if (name.length === 0 ||
            genre.length === 0 ||
            address.length === 0 ||
            phone.length === 0 ||
            birthdayDate.length === 0 ||
            position.length === 0 ||
            admission.length === 0 ||
            sector.length === 0 ||
            salary.length === 0) {
            setMessage('Informe todos os dados')
        } else {
            db.collection('funcionarios').doc(id).update({
                name: name,
                genre: genre,
                address: address,
                phone: phone,
                birthdayDate: birthdayDate,
                position: position,
                admission: admission,
                sector: sector,
                salary: salary,
            }).then (() => {
                    setMessage('')
                    setSuccess('S')
                }).catch((e) => {
                    setMessage(e);
                    setSuccess('N')
                })

                db.collection(`funcionario-${id}`).add({
                    name: name,
                    genre: genre,
                    imgURL: imgURL,
                    address: address,
                    phone: phone,
                    birthdayDate: birthdayDate,
                    position: position,
                    admission: admission,
                    sector: sector,
                    salary: salary,
                }).then (() => {
                    console.log('Registrado no histórico')
                        setMessage('')
                        setSuccess('S')
                    }).catch((e) => {
                        setMessage(e);
                        setSuccess('N')
                })
            }
        }
    
    return (
        <div>
            <Header/>
            <div className="row container-margins">
                <div className="div1-margins form content col-lg-6  ">
                    {screen === 0 && (
                        <>
                            
                            <div className="row" >
                                <h2>Informações de Contato</h2>
                                <div className="content col-lg-8">
                                    <label htmlFor = "name">Nome</label>
                                    <input onChange={(e)=> {setName(e.target.value)}} value = {name} type="text" placeholder="Nome" id="name" name="name" disabled/>
                                    <p>ex: João José</p>
                                    

                                    <label htmlFor = "genre">Sexo</label>
                                    <input value = {genre} 
                                    onChange={(e)=> {setGenre(e.target.value)}} type="text" placeholder="Sexo" id="genre" name="genre" disabled/>
                                    <p className="testeEspaco">ex: Masculino</p>
                                </div>
                                
                                <div className="imgPerfil col-lg-4">
                                    <label htmlFor = "photo">Foto de Perfil</label>
                                    {!imgURL && <img src= {imgProfile} alt=""/>}
                                    {imgURL && <img src={imgURL} className='imgPerfil'/> }
                                </div>
                            </div>

                            <label htmlFor = "address">Endereço</label>
                            <input value = {address}
                            onChange={(e)=> {newSetAddress(e)}} type="text" placeholder="Endereço" id="address" name="address"/>
                            <p>ex: Rua do Brasil, 999</p>

                            <div>
                                <div className="row">
                                    <div className="content col-lg-6">
                                        <label htmlFor = "phone">Telefone</label>
                                        <input value = {phone} 
                                        onChange={(e)=> newSetPhone(e)}
                                        type="text" placeholder="Telefone" id="phone" name="phone"/>
                                            
                                        <p>ex: (00) 0 0000-0000</p>
                                    </div>
                                    
                                    <div className="content col-lg-6">
                                    <label htmlFor = "birthdayDate">Data de aniversário</label>
                                    <input value = {birthdayDate}
                                    onChange={(e)=> {setBirthdayDate(e.target.value)}} type="text" placeholder="Data de aniversário" id="birthdayDate" name="birthdayDate" disabled/>
                                    <p className="cl-lg-6">ex: 10/01/1980</p>
                                    </div>                            
                                </div>
                            </div>
                        </>
                    )}

                    {screen === 1 && (
                        <>  
                            <div className="form-employee">
                                <h2>Informações do Funcionário</h2>
                                <label htmlFor = "position">Cargo</label>
                                <input value = {position}
                                onChange={(e)=> newSetPosition(e)}  type="text" placeholder="Cargo" id="position" name="position"/>
                                <p>ex: Gerente</p>

                                <label htmlFor = "admission">Data de adimissão</label>
                                <input value = {admission}
                                onChange={(e)=> {setAdmission(e.target.value)}} type="text" placeholder="Data de admissão" id="admission" name="admission" disabled/>
                                <p>ex: 10/01/1980</p>


                                <label htmlFor = "sector">Setor</label>
                                <input value = {sector} 
                                onChange={(e)=> newSetSector(e)} type="text" placeholder="Setor" id="sector" name="sector"/>
                                <p>ex: Vendas</p>

                                <label htmlFor = "salary">Salário</label>
                                <input value = {salary}
                                onChange={(e)=> newSetSalary(e)}  type="number" placeholder="Salário" id="salary" name="salary"/>
                                <p>ex: 3500,00</p>
                            </div>
                        </>
                    )}

                    <div className="buttons row">
                        
                        {screen === 0 ? <div className="buttons"> 
                            <Link to = '/'><button className= "btn btn-lg col-lg-4 col-12 cancel-button">Cancelar</button></Link>
                            <button className= "btn btn-lg col-lg-4 col-12" onClick={handleNavigateToContatoNext}>Próxima</button></div>
                            : <button onClick={handleNavigateToContatoPrevius} className= "btn btn-lg col-lg-4" >Anterior</button>
                        }

                        {screen === 1? <button className= "btn btn-lg col-lg-4 col-12" onClick={handleSubmit}>Atualizar</button> : <div></div>}   

                        <button onClick={() => employeeById(employeeInformation)} className="btn btn-danger mb-3" type="button" id="button-addon2"><AiTwotoneFilePdf className='icon-size'/> Gerar PDF</button>
                        
                        <Link className="btn btn-danger mb-5"  id='button-historico' to={'/historico/' + id}> <RiFolderHistoryLine className='icon-size'/> Histórico do Funcionário</Link>

                    </div>

                    { message.length > 0 ? <div className="alert alert-danger mt-3" role="alert">{message}</div> : null}

                    {success==='S' ? <Navigate to='/'/> : null}

                </div>
                <div className="col-lg-6" id="backgroundDiv" >
                    <div id="backgroundPaper">
                        <h1 className="mb-4">Informações do Funcionário</h1>
                        <input type="text" className="row" value={`Nome: ${name}`} disabled/>
                        <input type="text" className="row" value={`Sexo: ${genre}`} disabled/>
                        <input type="text" className="row" value={`Endereço: ${address}`} disabled/>
                        <input type="text" className="row" value={`Telefone: ${phone}`} disabled/>
                        <input type="text" className="row" value={`Data de Nascimento: ${birthdayDate}`} disabled/>
                        <input type="text" className="row" value={`Cargo: ${position}`} disabled/>
                        <input type="text" className="row" value={`Data de admissão: ${admission}`} disabled/>
                        <input type="text" className="row" value={`Setor: ${sector}`} disabled/>
                        <input type="text" className="row" value={`Salário: ${salary}`} disabled/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AtualizarCadastro