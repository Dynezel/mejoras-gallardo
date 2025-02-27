import { useState } from 'react'
import './App.css'
import Febrero from './Components/Febrero'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Marzo from './Components/Marzo'
import Inicio from './Components/Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element= { <Inicio/> } />
          <Route path='/febrero' element={<Febrero />} />
          <Route path='/marzo' element={<Marzo/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
