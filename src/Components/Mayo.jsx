import React from 'react'

export default function Mayo() {
    return (
        <div>
            <h2>Mejoras Gallardo</h2>
            <h3>Mes de Mayo</h3>
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
                    <tr>
                        <td>11/05</td>
                        <td className="ingresos">Moises Ganoza, Manzana 8 Lotes 4 y 5</td>
                        <td>50.000</td>
                        <td></td>
                        <td>1.014.000</td>
                    </tr>
                    <tr>
                        <td>11/05</td>
                        <td className="ingresos">Claudia Mazzini, Manzana 28 lotes 7 y 9</td>
                        <td>25.000</td>
                        <td></td>
                        <td>1.039.000</td>
                    </tr>
                    <tr>
                        <td>12/05</td>
                        <td className="ingresos">Delgado Maria, Manzana 22 Lote 11</td>
                        <td>50.000</td>
                        <td></td>
                        <td>1.089.000</td>
                    </tr>
                    <tr>
                        <td>12/05</td>
                        <td className="ingresos">Yamila Gartner, Manzana 2 Lote 16</td>
                        <td>25.000</td>
                        <td></td>
                        <td>1.114.000</td>
                    </tr>
                    <tr>
                        <td>12/05</td>
                        <td className="ingresos">
                            Pablo Silva, Manzana 7 Lotes 3 y 4 <br /> Manzana 15 Lote 7, Manzana 5 Lote 2{" "}
                        </td>
                        <td>75.000</td>
                        <td></td>
                        <td>1.189.000</td>
                    </tr>
                    <tr>
                        <td>13/05</td>
                        <td className="ingresos">Victoria Rojas, Manzana 3 Lote 7</td>
                        <td>13.000</td>
                        <td></td>
                        <td>1.202.000</td>
                    </tr>
                    <tr>
                        <td>13/05</td>
                        <td className="ingresos">Graciela Almiron, Manzana 1 Lote 17</td>
                        <td>25.000</td>
                        <td></td>
                        <td>1.227.000</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
