import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({ name: "", price: "", code: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price && product.code) {
      onAddProduct(product);
      setProduct({ name: "", price: "", code: "" });
    }
  };

  return (
    <div className="my-4">
      <h2 className="mb-4">Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre del Producto:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="code">Código:</label>
          <input
            type="text"
            id="code"
            name="code"
            value={product.code}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
