//Importações React
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

//Importações Estilização
// @ts-ignore
import imgProfile  from '../../assets/profile.png';
import './FormFuncionario.css'
import { IoIosAddCircleOutline } from 'react-icons/io'

//Importações Banco de Dados
import 'firebase/firestore';
import firebase from "../../firebase.config";
import 'firebase/storage';


const FormFuncionario = (props) => {
    //Iniciando FireStore
    const db = firebase.firestore();
    const storage = firebase.storage();

    //UseStates Renderização
    const [screen, setScreen] = React.useState<number>(0);
    const [message, setMessage] = useState ('')
    const [success, setSuccess] = useState ('')

    //UseStates Variáveis
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [imgURL ,setImgURL] = useState('')
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    const [position, setPosition] = useState('');
    const [admission, setAdmission] = useState('');
    const [sector, setSector] = useState('');
    const [salary, setSalary] = useState('');    
    
    
    const imgHandler = (event) => {
        var ref = firebase.storage().ref('files');

        var file = event.target.files[0];

        const data = new Date().valueOf()
        console.log(data)

        ref.child(`file-${file.name}-${data}`).put(file).then(snapshot => {
            console.log('snapshot', snapshot);
            ref.child(`file-${file.name}-${data}`).getDownloadURL().then((url) => {
                console.log('string para download', url)
                setImgURL(url)
            })
        })
    }

   

    //Funções Buttons com verificaçções
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
            db.collection('funcionarios').add({
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
                console.log('Sucesso ao cadastrar funcionário')
                    setMessage('')
                    setSuccess('S')
                }).catch((e) => {
                    setMessage(e);
                    setSuccess('N')
            })
        }
    }

    //Forms MultiStep
    return (
        <div>
            <div className="row container-margins">
                <div id="alignForm" className="div1-margins form content col-lg-6  ">
                    {screen === 0 && (
                        <>
                            <h2>Informações de Contato</h2>
                            <div className="row marginDiv">
                                <div className="content col-lg-8">
                                    <label htmlFor = "name">Nome</label>
                                    <input value = {name}
                                    onChange={(e)=> {setName(e.target.value)}} type="text" placeholder="Nome" id="name" name="name"/>
                                    <p>ex: João José</p>
                                    

                                    <label htmlFor = "genre">Gênero</label>
                                    <label htmlFor = "genre">Nome</label>
                                    <input value = {genre}
                                    onChange={(e)=> {setGenre(e.target.value)}} type="text" placeholder="Gênero" id="genre" name="genre"/>
                                    <p>ex: Masculino</p>
                                </div>
                                
                                <div className="imgPerfil col-4 row" >
                                    
                                    <label id="showLabel" htmlFor = "photo">
                                        {!imgURL && <img src= {imgProfile} alt="" id="imgPerfilCadastrar"/>}
                                        {imgURL && <img src={imgURL} id="imgPerfilUploaded"/> }
                                        <input className="col-2 fileButton" type="file" name="photo" id="photo" onChange={imgHandler}/>
                                    </label>
                                </div>
                            </div>

                            <label htmlFor="address">Endereço</label>
                            <input value = {address}
                            onChange={(e)=> {setAddress(e.target.value)}} type="text" placeholder="Endereço" id="address" name="address"/>
                            <p>ex: Rua do Brasil, 999</p>

                            <div>
                                <div className="row">
                                    <div className="content col-lg-6">
                                        <label htmlFor = "phone">Telefone</label>
                                        <input value = {phone} 
                                        onChange={(e)=> {setPhone(e.target.value)}}
                                        type="number" placeholder="Telefone" id="phone" name="phone"/>
                                            
                                        <p>ex: 00000000000</p>
                                    </div>
                                    
                                    <div className="content col-lg-6">
                                    <label htmlFor = "birthdayDate">Data de aniversário</label>
                                    <input value = {birthdayDate} 
                                    onChange={(e)=> {setBirthdayDate(e.target.value)}} type="text" placeholder="Data de aniversário" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} id="birthdayDate" name="birthdayDate"/>
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
                                onChange={(e)=> {setAdmission(e.target.value)}} type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} placeholder="Data de admissão" id="admission" name="admission"/>
                                <p>ex: 10/01/1980</p>


                                <label htmlFor = "sector">Setor</label>
                                <input value = {sector} 
                                onChange={(e)=> {setSector(e.target.value)}} type="text" placeholder="Setor" id="sector" name="sector"/>
                                <p>ex: Vendas</p>

                                <label htmlFor = "salary">Salário</label>
                                <input value = {salary}
                                onChange={(e)=> {setSalary(e.target.value)}}  type="number" placeholder="Salário" id="salary" name="salary"/>
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

                        {screen === 1? <button className= "btn btn-lg col-lg-4" type="submit" onSubmit={imgHandler} onClick={handleSubmit}>{props.textButton}</button> : <div></div>}   
                    </div>

                    { message.length > 0 ? <div className="alert alert-danger mt-3" role="alert">{message}</div> : null}

                    {success==='S' ? <Navigate to='/'/> : null}
                </div>
                    
                <div className="col-lg-6" id="backgroundDiv" >
                    <div id="backgroundPaper">
                        <h1 className="mb-4">Informações do Funcionário</h1>
                        <input type="text" className="row" value={`Nome: ${name}`} disabled/>
                        <input type="text" className="row" value={`Sexo: ${genre}`} disabled/>
                        <div id="imgPerfilDivPDF col-lg-4">
                                    <label htmlFor = "photo">Foto de Perfil</label>
                                    {!imgURL && <img id="imgPerfilDivPDF" src= {imgProfile} alt=""/>}
                                    {imgURL && <img src={imgURL} id="imgPerfilDivPDF"/> }
                        </div>
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

export default FormFuncionario