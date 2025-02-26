import { useState } from 'react'
import './App.css'
import Febrero from './Components/Febrero'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Marzo from './Components/Marzo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Link to = '/febrero'> Mes de Febrero </Link>
      <br/>
      <Link to = '/marzo'> Mes de Marzo </Link>
        <Routes>
          <Route path='/febrero' element={<Febrero />} />
          <Route path='/marzo' element={<Marzo/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
