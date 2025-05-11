import React from 'react'

export default function Mayo() {
  return (
    <div>
            <h2>Mejoras Gallardo</h2>
            <h3>Mes de Abril</h3>
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
                        <td>01/05</td>
                        <td className="restante">Restante Abril</td>
                        <td>914.000</td>
                        <td></td>
                        <td>914.000</td>
                    </tr>
                    <tr>
                        <td>08/05</td>
                        <td className="ingresos">Arias Fernando, Manzana 5 Lote 5</td>
                        <td>25.000</td>
                        <td></td>
                        <td>939.000</td>
                    </tr>
                    <tr>
                        <td>11/05</td>
                        <td className="ingresos">Graciela Almiron, Manzana 1 Lote 17</td>
                        <td>25.000</td>
                        <td></td>
                        <td>964.000</td>
                    </tr>
                </tbody>
            </table>
        </div >
  )
}
