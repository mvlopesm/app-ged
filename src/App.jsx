import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { AuthContext, AuthProvider } from './Context/auth';

import Login from './pages/Login';
import Home from './pages/Home';
import AtualizarCadastro from './pages/AtualizarCadastro';
import CadastrarFuncionario from './pages/CadastrarFuncionario';
import RecuperarSenha from './pages/RecuperarSenha';
import CriarConta from './pages/CriarConta';


import './styles/index.css'


const App = () => {
  const {logado} = useContext(AuthContext)
  console.log(logado)

  const Private = ({ children }) => {
    // @ts-ignore
    if(!logado) {
      return <Navigate to='/login'/>
    } else {
      return children;
    }
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/login/recuperarSenha' element={<RecuperarSenha />}/>
          <Route path='/login/criarConta' element={<CriarConta />}/>
           
          <Route path='/' element={<Private><Home /></Private>}/>
          <Route path='/atualizarCadastro/:id' element={<AtualizarCadastro />}/>
          <Route path='/cadastrarFuncionario' element={<CadastrarFuncionario />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


