import React, { useState } from "react";
import { Link } from "react-router-dom";

// @ts-ignore
import imgMarcaTaugor from '../../assets/marca-taugor.png'
import './Login.css'

import firebase from '../../../firebase';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { dividerClasses } from "@mui/material";


const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sucesso, setSucesso] = useState ('')

  const auth = getAuth()
  const LoginUsuario = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        setSucesso('S')
      })
      .catch((error) => {
        setSucesso('N')
        const errorCode = error.code;
        const errorMessage = error.message
    })
  }
  

  const alterarEmail = (event) => {
    setEmail(event.target.value)
  }

  const alterarSenha = (event) => {
    setSenha(event.target.value)
}

  return (
      <div className="d-flex align-itens-center text-center form-container">
        <form className="form-signin">

          <img className="mb-4" src={imgMarcaTaugor} alt=""/>
          <h1 className="h3 mb-3 fw-normal">Login</h1>

          <div className="">
            <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
            <label htmlFor="floatingInput">E-mail</label>
          </div>

          <div className="">
            <input onChange={alterarSenha}type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label htmlFor="floatingPassword">Senha</label>
          </div>

          <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button"><Link to='/meusFuncionarios' className="submitButton">Acessar</Link></button>

          { sucesso === 'N' ? <div className="alert alert-danger mt-3" role="alert">Email ou senha inválida</div> : null}

          <div className="links">
              <Link to="recuperarSenha" className="mx-2">Esqueci minha senha</Link>
              <Link to="criarConta" className="mx-3">Criar uma conta</Link>
          </div>
        </form>
      </div>
    )
}

export default Login