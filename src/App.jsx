import { useState } from 'react'
import './App.css'
import Febrero from './Components/Febrero'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Marzo from './Components/Marzo'
import Navbar from './Components/Navbar'
import Abril from './Components/Abril'
import Mayo from './Components/Mayo'
import Junio from './Components/Junio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/febrero' element={<Febrero />} />
          <Route path='/marzo' element={<Marzo/>} />
          <Route path='/abril' element={<Abril/>} />
          <Route path="/mayo" element={<Mayo/>} />
          <Route path="/junio" element={<Junio/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App