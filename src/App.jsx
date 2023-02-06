//Importações React
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


//Importações Estilização
import './styles/index.css'

//Importações Bando de Dados
import { AuthContext} from './Context/auth';

//Importações Components
import Login from './pages/Login';
import Home from './pages/Home';
import AtualizarCadastro from './pages/AtualizarCadastro';
import CadastrarFuncionario from './pages/CadastrarFuncionario';
import RecuperarSenha from './pages/RecuperarSenha';
import CriarConta from './pages/CriarConta';
import HistoricoFuncionario from './pages/HistoricoFuncionario'


const App = () => {
  // @ts-ignore
  const {logged} = useContext(AuthContext)
  console.log(logged)

  const Private = ({ children }) => {
    // @ts-ignore
    if(!logged) {
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
          <Route path='/cadastrarFuncionario' element={<Private><CadastrarFuncionario /></Private>}/>
          <Route path='/atualizarCadastro/:id' element={<Private><AtualizarCadastro /></Private>}/>
          <Route path='/historico/:id' element={<Private><HistoricoFuncionario /></Private>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


