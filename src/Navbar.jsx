import React, { useState } from "react";


const Navbar = () => {
  // Definición de estado para controlar la apertura/cierre del menú
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Botón para abrir/cerrar el menú */}
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      {/* Lista de elementos de menú */}
      <ul className="menu">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Navbar;
