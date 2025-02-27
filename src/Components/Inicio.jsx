import React from 'react'
import { Link } from 'react-router-dom'
import '../css/inicio.css'

export default function Inicio() {
  return (
    <div>
      <Link to = '/febrero' className='enlace-resumen'> Resumen del Mes de Febrero </Link>
      <br/>
      <Link to = '/marzo' className='enlace-resumen'> Resumen del Mes de Marzo </Link>
    </div>
  )
}
