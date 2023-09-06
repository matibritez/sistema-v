import React, { useState } from "react";
import "./Sidebar.css"; // Importa tus estilos de CSS

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <ul className="menu">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Sidebar;
