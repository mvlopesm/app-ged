import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import HomeLogin from './pages/HomeLogin.jsx';
import MeusFuncionarios from './pages/MeusFuncionario';
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
          <Route path='/login' element={<HomeLogin />}/>
          <Route path='/login/recuperarSenha' element={<RecuperarSenha />}/>
          <Route path='/login/criarConta' element={<CriarConta />}/>
          <Route path='/meusFuncionarios' element={<MeusFuncionarios />}/>
          <Route path='/atualizar-cadastro' element={<AtualizarCadastro />}/>
          <Route path='/cadastrar-funcionario' element={<CadastrarFuncionario />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
