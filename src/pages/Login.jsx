import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/auth.jsx";

// @ts-ignore
import imgMarcaTaugor from '../assets/marca-taugor.png'
import firebase from '../firebase.config'
import 'firebase/auth'

import '../styles/Login.css'
import Header from "../components/Header/Header";




const LoginComponent = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState ('')
  // @ts-ignore
  const {setLogged} = useContext(AuthContext)


  const LoginUsuario = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('logged', "S")
        setLogged(true)
        setSuccess('S')
      }).catch (() => {
        localStorage.setItem('logged', "N")
        setLogged(false)
        setSuccess('N')
      })
  }
 
  

  return (
        <div>  
        <Header/>
        <div className="d-flex align-itens-center text-center form-container">
            <form className="form-signin">

            <img className="mb-4" src={imgMarcaTaugor} alt=""/>
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className="mb-3 boxSizing" >
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
                <label htmlFor="floatingInput">E-mail</label>
            </div>

            <div className="boxSizing mb-3">
                <input onChange={(e) => setPassword(e.target.value)}type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
                <label htmlFor="floatingPassword">Senha</label>
            </div>

            <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>

            { success === 'N' ? <div className="alert alert-danger mt-3" role="alert">Email ou senha inválida</div> : null}

            {success==='S' ? <Navigate to='/'/> : null}

            <div className="links">
                <Link to="recuperarSenha" className="mx-2">Esqueci minha senha</Link>
                <Link to="criarConta" className="mx-3">Criar uma conta</Link>
            </div>
            </form>
        </div>
        </div>
    )
}

export default LoginComponent