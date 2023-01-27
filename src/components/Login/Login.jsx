import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import imgMarcaTaugor from '../../assets/marca-taugor.png'

import './Login.css'


const Login = () => {

  const LoginUsuario = () => {
    alert("login")
  }

  return (
      <div className="d-flex align-itens-center text-center form-container">
        <form className="form-signin">

          <img className="mb-4" src={imgMarcaTaugor} alt=""/>
          <h1 className="h3 mb-3 fw-normal">Login</h1>

          <div className="">
            <input type="email" className="form-control" id="floatingInput" placeholder="Email"/>
            <label htmlFor="floatingInput">E-mail</label>
          </div>

          <div className="">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label htmlFor="floatingPassword">Senha</label>
          </div>

          <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button"><Link to='/meusFuncionarios' className="submitButton">Acessar</Link></button>

          <div className="links">
              <Link to="recuperarSenha" className="mx-2">Esqueci minha senha</Link>
              <Link to="criarConta" className="mx-3">Criar uma conta</Link>
          </div>
        </form>
      </div>
    )
}

export default Login