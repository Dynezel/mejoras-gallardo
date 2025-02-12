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
      <tr>
        <td>Diego Pergar, Manzana 7 Lote 5</td>
        <td>20.000</td>
        <td>07/02</td>
      </tr>
      <tr>
        <td>Adrian Valenzuela, Manzana 17 Lote 4</td>
        <td>25.000</td>
        <td>07/02</td>
      </tr>
      <tr>
        <td>Yamila Gartner, Manzana 2 Lote 16</td>
        <td>25.000</td>
        <td>07/02</td>
      </tr>
      <tr>
        <td>Maidana Saravia, Manzana 28 Lote 20</td>
        <td>20.000</td>
        <td>07/02</td>
      </tr>
      <tr>
        <td>Cristian David Anaya</td>
        <td>25.000</td>
        <td>07/02</td>
      </tr>
      <tr>
        <td>Cristian Iraia, Manzana 6 Lote 16</td>
        <td>25.000</td>
        <td>09/02</td>
      </tr>
      <tr>
        <td>Fanny Cabrera, Manzana 3 Lote 15</td>
        <td>25.000</td>
        <td>09/02</td>
      </tr>
      <tr>
        <td>Ursulina Benegas, Manzana 5 Lote 13</td>
        <td>25.000</td>
        <td>09/02</td>
      </tr>
      <tr>
        <td>Delgado Maria, Manzana 22 Lote 11</td>
        <td>50.000</td>
        <td>09/02</td>
      </tr>
      <tr>
        <td>Mariela Noemi, Manzana 26 Lote 5 y 6</td>
        <td>25.000</td>
        <td>09/02</td>
      </tr>
      <tr>
        <td>Victoria Rojas, Manzana 3 Lote 7</td>
        <td>30.000</td>
        <td>09/02</td>
      </tr>
      <tr>
        <td>Mackendy Oge, Manzana 4 Lote 10, 
          <br/>
          Manzana 1 Lotes 10 y 12</td>
        <td>20.000</td>
        <td>10/02</td>
      </tr>
      <tr>
        <td>Mariela Montenegro, Manzana 26 Lote 18</td>
        <td>25.000</td>
        <td>10/02</td>
      </tr>
      <tr>
        <td>Yamina Romano, Manzana 11 Lote 14</td>
        <td>30.000</td>
        <td>11/02</td>
      </tr>
      <tr className="restante">
        <td>Restante Enero:</td>
        <td>575.000</td>
      </tr>
      { /*SIEMPRE ACTUALIZAR DESPUES DE CUALQUIER PAGO*/ }
      <tr className="recaudado">
        <td>Recaudado Febrero:</td>
        <td>625.000</td>
      </tr>
      <tr className="gastado">
        <td>Gastado Febrero:</td>
        <td>-</td>
      </tr>
      { /*SIEMPRE ACTUALIZAR DESPUES DE CUALQUIER PAGO*/ }
      <tr className="actual">
        <td>Dinero Total:</td>
        <td>1.200.000</td>
      </tr>
    </table>
    </>
  );
}
