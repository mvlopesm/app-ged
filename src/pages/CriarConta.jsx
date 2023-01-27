import React, { useState } from "react";
import { Link } from "react-router-dom";

// @ts-ignore
import imgMarcaTaugor from '../assets/marca-taugor.png';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const CriarConta = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState ('')

    const cadastrarUsuario = () => {
      setMessage('')
      
      if (!email || !password) {
        setMessage('Preencha todos os campos')
        return;
      }
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert('Usuário cadastrado com sucesso')
        })
        .catch((error) => {
          setMessage(error.message)
          if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            setMessage('A senha deve ter 6 caracteres ou mais')
          } else if (error.message === 'Firebase: Error (auth/email-already-in-use).'){
            setMessage('E-mail já está em uso')
          } else if (error.message ==='Firebase: Error (auth/invalid-email).') {
            setMessage('E-mail inválido')
          } else {
            setMessage('Erro ao criar a conta: ' + error.message)
          }
        });
    };

  
    return (
        <div className="d-flex align-itens-center text-center form-container">
          <form className="form-signin">
  
            <img className="mb-4" src={imgMarcaTaugor} alt=""/>
            <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>
  
            <div>
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
              <label htmlFor="floatingInput">E-mail</label>
            </div>
  
            <div>
              <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
              <label htmlFor="floatingPassword">Senha</label>
            </div>
  
            <button onClick={cadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="button">Cadastrar</button>

            { message.length > 0 ? <div className="alert alert-danger mt-3" role="alert">{message}</div> : null}

            <div className="links">
              <Link to="/login" className="mx-2">Já tenho uma conta</Link>
            </div>
          </form>
        </div>
      )
  }

export default CriarConta