import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

// @ts-ignore
import imgMarcaTaugor from '../assets/marca-taugor.png'

import firebase from "../firebase.config";
import 'firebase/auth';

const RecuperarSenha = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState ('');
  const [success, setSuccess] = useState('')

  const recuperarSenha = () => {

    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        setMessage('');
        setSuccess('Email enviado com sucesso')
      })
      .catch ((e) => {
        setSuccess('');
        setMessage('Erro ao enviar o email: ' + e.message)        
      }) 

  }
  
    return (
        <div className="d-flex align-itens-center text-center form-container">
          <form className="form-signin">
  
            <img className="" src={imgMarcaTaugor} alt=""/>
            <h1 className="h3 mb-3 fw-normal " >Recuperar Senha</h1>
  
            <div className="boxSizing mb-2">
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
              <label htmlFor="floatingInput">E-mail</label>
            </div>
  
            <button onClick={recuperarSenha} className="w-100 btn btn-lg btn-primary " type="button">Enviar</button>

            { message.length > 0 ? <div className="alert alert-danger mt-3" role="alert">{message}</div> : null}

            { success.length > 0 ? <div className="alert alert-success mt-3" role="alert">{success}</div> : null}
  
            <div className="links">
                <Link to="/login/criarConta">Criar uma conta</Link>
            </div>
          </form>
        </div>
      )
  }

export default RecuperarSenha