import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom"
// @ts-ignore
import imgProfile  from '../assets/profile.png';

import 'firebase/firestore'
import firebase from "../firebase.config";
import Header from "../components/Header/Header";


const AtualizarCadastro = (props) => {

    const db = firebase.firestore();
    let { id } = useParams();

    const [screen, setScreen] = React.useState<number>(0);
    const [message, setMessage] = useState ('')
    const [success, setSuccess] = useState ('')

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    const [position, setPosition] = useState('');
    const [admission, setAdmission] = useState('');
    const [sector, setSector] = useState('');
    const [salary, setSalary] = useState('');

    useEffect (() => {
        firebase.firestore().collection('funcionarios').doc(id).get().then((resultado) => {
            setName(resultado.data().name);
            setGenre(resultado.data().genre)
            setAddress(resultado.data().address)
            setPhone(resultado.data().phone)
            setBirthdayDate(resultado.data().birthdayDate)
            setPosition(resultado.data().position)
            setAdmission(resultado.data().admission)
            setSector(resultado.data().sector)
            setSalary(resultado.data().salary)
        })
    }, [])

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
            }
        }
    
    return (
        <div>
        <Header/>
        <div className="form">
            {screen === 0 && (
                <>
                    <h2>Informações de Contato</h2>
                    <div className="row" >
                        <div className="content col-lg-8">
                            <label htmlFor = "name">Nome</label>
                            <input onChange={(e)=> {setName(e.target.value)}} value = {name} type="text" placeholder="Nome" id="name" name="name" disabled/>
                            <p>ex: João José</p>
                            

                            <label htmlFor = "genre">Sexo</label>
                            <input value = {genre} 
                            onChange={(e)=> {setGenre(e.target.value)}} type="text" placeholder="Sexo" id="genre" name="genre" disabled/>
                            <p>ex: Masculino</p>
                        </div>
                        
                        <div className="imgPerfil col-lg-4">
                            <label htmlFor = "photo">Foto de Perfil</label>
                            <img src= {imgProfile} alt="" />
                        </div>
                    </div>

                    <label htmlFor = "address">Endereço</label>
                    <input value = {address}
                    onChange={(e)=> {setAddress(e.target.value)}} type="text" placeholder="Endereço" id="address" name="address"/>
                    <p>ex: Rua do Brasil, 999 - Brasilia - DF - 00000 000</p>

                    <div>
                        <div className="row">
                            <div className="content col-lg-6">
                                <label htmlFor = "phone">Telefone</label>
                                <input value = {phone} 
                                onChange={(e)=> {setPhone(e.target.value)}}
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
                        onChange={(e)=> {setPosition(e.target.value)}}  type="text" placeholder="Cargo" id="position" name="position"/>
                        <p>ex: Gerente</p>

                        <label htmlFor = "admission">Data de adimissão</label>
                        <input value = {admission}
                        onChange={(e)=> {setAdmission(e.target.value)}} type="text" placeholder="Data de admissão" id="admission" name="admission" disabled/>
                        <p>ex: 10/01/1980</p>


                        <label htmlFor = "sector">Setor</label>
                        <input value = {sector} 
                        onChange={(e)=> {setSector(e.target.value)}} type="text" placeholder="Setor" id="sector" name="sector"/>
                        <p>ex: Vendas</p>

                        <label htmlFor = "salary">Salário</label>
                        <input value = {salary}
                        onChange={(e)=> {setSalary(e.target.value)}}  type="number" placeholder="Salário" id="salary" name="salary"/>
                        <p>ex: 3.500,00</p>
                    </div>
                </>
            )}

            <div className="buttons row">
                {screen === 0 ? <div className="buttons"> 
                    <Link to = '/'><button className= "btn btn-lg col-lg-4 cancel-button">Cancelar</button></Link>
                    <button className= "btn btn-lg col-lg-4" onClick={handleNavigateToContatoNext}>Próxima</button></div>
                    : <button onClick={handleNavigateToContatoPrevius} className= "btn btn-lg col-lg-4" >Anterior</button>
                }

                {screen === 1? <button className= "btn btn-lg col-lg-4" onClick={handleSubmit}>Atualizar</button> : <div></div>}   
            </div>

            { message.length > 0 ? <div className="alert alert-danger mt-3" role="alert">{message}</div> : null}

            {success==='S' ? <Navigate to='/'/> : null}

        </div>
        </div>
    )
}

export default AtualizarCadastro