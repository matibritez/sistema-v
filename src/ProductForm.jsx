import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    code: "",
    name: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleAddClick = () => {
    onAddProduct(newProduct);
    setNewProduct({
      code: "",
      name: "",
      price: 0,
    });
  };

  return (
    <div>
      <h2 className="my-4">Agregar Producto</h2>
      <div className="mb-3">
        <input
          type="text"
          name="code"
          value={newProduct.code}
          onChange={handleInputChange}
          placeholder="Código"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Nombre"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Precio"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddClick}>
        Agregar
      </button>
    </div>
  );
};

export default ProductForm;

