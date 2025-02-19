import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Febrero from './Components/Febrero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Mejoras Gallardo</h2>
    <h3>Mes de Febrero</h3>
      <Febrero/>
    </>
  )
}

export default App
