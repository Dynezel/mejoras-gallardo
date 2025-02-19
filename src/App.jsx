import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Febrero from './Components/Febrero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Febrero/>
    </>
  )
}

export default App
