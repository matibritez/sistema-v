import React from "react";
import './Lista1Component.css';

const Lista1Component = () => {
  return (
    <div>
      {/* Agregar un contenedor para centrar el título */}
      <div className="list-title">
        <h2>LISTA DE PRECIOS POR RUBRO | ESPECIAL CARNICERIAS</h2>
        <p>BOLSAS CAMISETAS REFORZADAS</p>
      </div>

      {/* Agregar la lista */}
      <ul className="price-list">
        <li>30x40 REFORZADA</li>
        <li>40x50 LIVIANA</li>
        <li>40x50 SELECTA</li>
        <li>40x50 REFORZADA</li>
        <li>45x55 CIUDAD NEGRA</li>
        <li>50x60 REFORZADA</li>
        <li>50x70 REFORZADA</li>
        <li>60x80 REFORZADA</li>
      </ul>
    </div>
  );
};

export default Lista1Component;
