import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
      <h1>HOME DO SITE</h1>
      <h2>Acesse o Hub Abaixo</h2>
      <div><Link to="/form">Acessar Formulário</Link></div>
      <div><Link to="/home">Acessar Home</Link></div>
      <Outlet/>
      <footer>Alguns Direitos Reservados!</footer>
    </>
  )
}

export default App
