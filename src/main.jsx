import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import AtualizarCadastro from './pages/AtualizarCadastro';
import CadastrarFuncionario from './pages/CadastrarFuncionario';
import RecuperarSenha from './pages/RecuperarSenha';
import CriarConta from './pages/CriarConta';


import './styles/index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element = {<App />}>
          <Route path='/login' element={<Login />}/>
          <Route path='/login/recuperarSenha' element={<RecuperarSenha />}/>
          <Route path='/login/criarConta' element={<CriarConta />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/atualizar-cadastro' element={<AtualizarCadastro />}/>
          <Route path='/cadastrar-funcionario' element={<CadastrarFuncionario />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
