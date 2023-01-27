import React, { useState } from "react";
import { Link } from "react-router-dom";

// @ts-ignore
import imgMarcaTaugor from '../../assets/marca-taugor.png'
import './Login.css'

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "../../../firebase";



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sucess, setsucess] = useState ('')

  const auth = getAuth(app)
  const LoginUsuario = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setsucess('S')
        alert('Login')
      })
      .catch((error) => {
        setsucess('N')
    })
  }

  return (
      <div className="d-flex align-itens-center text-center form-container">
        <form className="form-signin">

          <img className="mb-4" src={imgMarcaTaugor} alt=""/>
          <h1 className="h3 mb-3 fw-normal">Login</h1>

          <div className="">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
            <label htmlFor="floatingInput">E-mail</label>
          </div>

          <div className="">
            <input onChange={(e) => setPassword(e.target.value)}type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label htmlFor="floatingPassword">Senha</label>
          </div>

          <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>

          { sucess === 'N' ? <div className="alert alert-danger mt-3" role="alert">Email ou senha inválida</div> : null}

          <div className="links">
              <Link to="recuperarSenha" className="mx-2">Esqueci minha senha</Link>
              <Link to="criarConta" className="mx-3">Criar uma conta</Link>
          </div>
        </form>
      </div>
    )
}

export default Login