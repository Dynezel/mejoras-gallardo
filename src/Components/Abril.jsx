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
                        <td>01/04</td>
                        <td className="restante">Restante Marzo</td>
                        <td>764.000</td>
                        <td></td>
                        <td>764.000</td>
                    </tr>
                    <tr>
                        <td>02/04</td>
                        <td className="ingresos">
                        Pablo Silva & Isabel Gonzalez, Manzana 5 Lote 2, <br /> Manzana 7 Lote 3 y 4, y Manzana 15 Lote 7{" "}
                        </td>
                        <td>50.000</td>
                        <td></td>
                        <td>814.000</td>
                    </tr>
                    <tr>
                        <td>04/04</td>
                        <td className="ingresos">Arias Fernando, Manzana 5 Lote 5 </td>
                        <td>25.000</td>
                        <td></td>
                        <td>839.000</td>
                    </tr>
                    <tr>
                        <td>05/04</td>
                        <td className="ingresos">Hugo Romero, Manzana 17 Lote 16 </td>
                        <td>25.000</td>
                        <td></td>
                        <td>864.000</td>
                    </tr>
                    <tr>
                        <td>05/04</td>
                        <td className="ingresos">Victoria Rojas, Manzana 3 Lote 7</td>
                        <td>50.000</td>
                        <td></td>
                        <td>914.000</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}