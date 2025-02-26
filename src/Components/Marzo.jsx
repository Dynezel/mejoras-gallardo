import React from 'react'

export default function Marzo() {
    return (
        <div>
            <h2>Mejoras Gallardo</h2>
            <h3>Mes de Marzo</h3>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Detalles</th>
                        <th className="ingresos">Ingresos</th>
                        <th className="egresos">Egresos</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>26/02</td>
                        <td className="restante">Restante Febrero</td>
                        <td>209.000</td>
                        <td></td>
                        <td>209.000</td>
                    </tr>
                    <tr>
                        <td>25/02</td>
                        <td className="ingresos">Johanna Mayhua, Manzana 11 Lote 7 y 9</td>
                        <td>25.000</td>
                        <td></td>
                        <td>234.000</td>
                    </tr>
                    <tr>
                        <td>25/02</td>
                        <td className="ingresos">Luis Carabajal. Manzana 3 Lote 12</td>
                        <td>25.000</td>
                        <td></td>
                        <td>259.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
