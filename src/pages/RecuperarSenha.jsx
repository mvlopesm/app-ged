import React from "react";
import { Link } from "react-router-dom";

// @ts-ignore
import imgMarcaTaugor from '../assets/marca-taugor.png'

const RecuperarSenha = () => {

    const LoginUsuario = () => {
      alert("login")
    }
  
    return (
        <div className="d-flex align-itens-center text-center form-container">
          <form className="form-signin">
  
            <img className="mb-4" src={imgMarcaTaugor} alt=""/>
            <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>
  
            <div className="">
              <input type="email" className="form-control" id="floatingInput" placeholder="Email"/>
              <label htmlFor="floatingInput">E-mail</label>
            </div>
  
            <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button"><Link to='/meusFuncionarios' className="submitButton">Enviar</Link></button>
  
            <div className="links">
                <Link to="/login" className="mx-2">Login</Link>
                <Link to="/login/criarConta" className="mx-3">Criar uma conta</Link>
            </div>
          </form>
        </div>
      )
  }

export default RecuperarSenha