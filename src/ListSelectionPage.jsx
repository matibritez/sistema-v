import React, { useState } from "react";

// Importa los componentes que deseas mostrar
import Lista1Component from "./Lista1Component";
import Lista2Component from "./Lista2Component";

const ListSelectionPage = () => {
  const [selectedList, setSelectedList] = useState(null);

  // Función para manejar la selección de lista y cambiar el estado
  const handleSelectList = (listId) => {
    setSelectedList(listId);
  };

  return (
    <div>
      <h2>Selecciona una lista</h2>
      <button onClick={() => handleSelectList("lista1")}>Lista 1</button>
      <button onClick={() => handleSelectList("lista2")}>Lista 2</button>

      {/* Mostrar el componente correspondiente según la selección */}
      {selectedList === "lista1" && <Lista1Component />}
      {selectedList === "lista2" && <Lista2Component />}
    </div>
  );
};

export default ListSelectionPage;
