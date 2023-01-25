import { Link, Outlet } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <div className="App">
      <nav id='navbar'>
        <h2>
          <Link to='/'>Home</Link>
        </h2>
        <Link to='/meus-funcionarios'>Meus Funcionário</Link>
        <Link to='/atualizar-cadastro'>Atualizar Cadastro</Link>
        <Link to='cadastrar-funcionario'>Cadastrar Funcionário</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default App
