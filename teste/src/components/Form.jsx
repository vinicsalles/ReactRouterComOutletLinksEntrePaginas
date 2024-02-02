import { useState } from "react"
import "../components/Form.css"

const Form = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    setName("")
    setPassword("")
  }

  return (
    <>
    <h1>VOCÊ AGORA ESTA NO FORMULÁRIO DO SITE</h1>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Digite um Nome" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="password" placeholder="Digite uma Senha"  value={password} onChange={(e) => setPassword(e.target.value)}/>
    <input type="submit" />  
    </form>
    </>
  )
}

export default Form