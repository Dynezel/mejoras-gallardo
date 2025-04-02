import React from 'react'

export default function Abril() {
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
                        <td>26/02</td>
                        <td className="restante">Restante Marzo</td>
                        <td>764.000</td>
                        <td></td>
                        <td>764.000</td>
                        <tr>
                            <td>02/04</td>
                            <td className="ingresos">
                            Pablo Silva & Isabel Gonzalez, Manzana 5 Lote 2, <br/> Manzana 7 Lote 3 y 4, y Manzana 15 Lote 7{" "}
                            </td>
                            <td>50.000</td>
                            <td></td>
                            <td>814.000</td>
                        </tr>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}