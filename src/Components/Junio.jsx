import React from 'react'

export default function Junio() {
    return (
        <div>
            <h2>Mejoras Gallardo</h2>
            <h3>Mes de Junio</h3>
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
                        <td>01/06</td>
                        <td className="restante">Restante Mayo</td>
                        <td>162.000</td>
                        <td></td>
                        <td>162.000</td>
                    </tr>
                    <tr>
                        <td>03/06</td>
                        <td className="ingresos">
                            Pablo Silva, Manzana 7 Lotes 3 y 4 <br /> Manzana 15 Lote 7, Manzana 5 Lote 2{" "}
                        </td>
                        <td>75.000</td>
                        <td></td>
                        <td>237.000</td>
                    </tr>
                    <tr>
                        <td>05/06</td>
                        <td className="ingresos">
                            Arias Fernando, Manzana 5 Lote 5 
                        </td>
                        <td>25.000</td>
                        <td></td>
                        <td>262.000</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
