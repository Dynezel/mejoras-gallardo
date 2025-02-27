import { useState } from 'react'
import './App.css'
import Febrero from './Components/Febrero'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Marzo from './Components/Marzo'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/febrero' element={<Febrero />} />
          <Route path='/marzo' element={<Marzo/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
