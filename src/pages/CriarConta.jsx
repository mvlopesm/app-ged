import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import '../styles/criarConta.css'

import firebase from "../firebase.config";
import 'firebase/auth';
import Header from "../components/Header/Header";
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

const CriarConta = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState ('');
    const [success, setSuccess] = useState ('');

    const cadastrarUsuario = () => {
      setMessage('')
      
      if (!email || !password) {
        setMessage('Preencha todos os campos')
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          setSuccess('S')
        })
        .catch((e) => {
          setSuccess('N')
          if (e.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            setMessage('A senha deve ter 6 caracteres ou mais')
          } else if (e.message === 'Firebase: Error (auth/email-already-in-use).'){
            setMessage('E-mail já está em uso')
          } else if (e.message ==='Firebase: Error (auth/invalid-email).') {
            setMessage('E-mail inválido')
          } else {
            setMessage('Erro ao criar a conta: ' + e.message)
          }
        });
    };

    const paperStyle={padding:'20px', height:'507px', width:280, margin:'30px auto'};

    const avatarStyle={backgroundColor:'#388cc8', margin:'18px auto'};

    const btnStyle = {margin:'15px 0'}
  
    return (
        <>
        <Header/>

        <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid>
                <Avatar className="grid-centralize" style={avatarStyle}><LockIcon/></Avatar>
                <h2 className="grid-centralize">Criar Conta</h2>
              </Grid>
              <TextField onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="form-control" id="floatingInput"/>
              <TextField onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>

              <Button onClick={cadastrarUsuario} type='submit' color='primary' id="btn-SingUp" style={btnStyle} fullWidth>Cadastrar</Button>

              <Typography className="grid-centralize">
                <Link  to='/login'>Já tenho uma conta</Link>
              </Typography>

              { message.length > 0 ? <div className="alert alert-danger mt-3" role="alert">{message}</div> : null}

              {success==='S' ? <Navigate to='/'/> : null}

            </Paper>
          </Grid>
        </>
      )
  }

export default CriarConta