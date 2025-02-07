import "../css/tablas.css";
import React from "react";

export default function Febrero() {
  return (
    <>
    <h2>Febrero</h2>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Fecha</th>
      </tr>
      <tr>
        <td>Luis Carabajal, Manzana 3 Lote 12</td>
        <td>25.000</td>
        <td>03/02</td>
      </tr>
      <tr>
        <td>Claudia Mazzini, Manzana 28, Lotes 7 y 9</td>
        <td>25.000</td>
        <td>03/02</td>
      </tr>
      <tr>
        <td>Ovidio Vera, Manzana 21, Lote 2</td>
        <td>25.000</td>
        <td>05/02</td>
      </tr>
      <tr>
        <td>Johanna Mayhua, Manzana 11, Lotes 7 y 9</td>
        <td>25.000</td>
        <td>06/02</td>
      </tr>
      <tr>
        <td>Isabel Gonzalez, Manzana 15, Lote 7</td>
        <td>25.000</td>
        <td>06/02</td>
      </tr>
      <tr>
        <td>
          Pablo Silva, Manzana 7, Lotes 3 y 4 <br /> Manzana 5, Lote 2{" "}
        </td>
        <td>50.000</td>
        <td>06/02</td>
      </tr>
      <tr>
        <td>Graciela Almiron, Manzana 1, Lote 17</td>
        <td>25.000</td>
        <td>06/02</td>
      </tr>
      <tr>
        <td>Johana Gonzalez, Manzana 17, Lote 8</td>
        <td>25.000</td>
        <td>07/02</td>
      </tr>
      <tr>
        <td>Dorila Tesen Chavez, Manzana 23 Lote 2</td>
        <td>30.000</td>
        <td>07/02</td>
      </tr>
      <tr className="restante">
        <td>Restante Enero:</td>
        <td>575.000</td>
      </tr>
      <tr className="recaudado">
        <td>Recaudado Febrero:</td>
        <td>255.000</td>
      </tr>
      <tr className="gastado">
        <td>Gastado Febrero:</td>
        <td>-</td>
      </tr>
      <tr className="actual">
        <td>Dinero Total:</td>
        <td>830.000</td>
      </tr>
    </table>
    </>
  );
}
