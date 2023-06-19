import { useState } from 'react'
import './App.css'

const AppNavBar = () =>{
  return(
    <div>
      <h1>Fazendinha</h1>
    </div>
  )
}

const AppEntrada = (props: any) => {
  
  return(
    <div className="card">
      <label htmlFor='nome' className="form-label">Nome:</label>
      <br/>
      <input 
        type="texto"
        id='nome'
        className='effect-16'
        placeholder='Informe o nome do animal'
        value={props.texto} 
        onChange={props.mudarTexto}/>
       
    </div>
  )
}

const AppCloneEntrada = (props: any) =>{
  return(
    <label className='fixed-label'>{props.texto}</label>
  )
}

function App() {

  const [entrada, setEntrada] = useState ("")

  return (
    <>
      <AppNavBar/>
      <br/>
      <AppEntrada texto={entrada} mudarTexto={(e: any) => setEntrada(e.target.value)}/>
      <br/>
      <AppCloneEntrada texto = {entrada}/>
    </>
  )
}

export default App