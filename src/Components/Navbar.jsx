import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar() {
    const[value, setValue] = useState("default");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const mes = event.target.value
        setValue(mes)
        if(mes == "/febrero"){
        navigate(mes)
        }
        if(mes == "/marzo") {
            navigate(mes)
        }
    }
    
    return (
        <nav className='navbar'>
            <select value={value} onChange={handleChange}>
            <option value="default" className='enlace-resumen'> Elegí un Mes para ver el resumen </option>    
            <option value="/febrero" className='enlace-resumen'> Resumen del Mes de Febrero </option>
            <option value="/marzo" className='enlace-resumen'> Resumen del Mes de Marzo </option>
            </select>
        </nav>
    )
}
