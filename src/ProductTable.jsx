import React, { useState } from "react";

const ProductTable = ({ products, onUpdateProduct, onDeleteProduct }) => {
  const [editedProduct, setEditedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditClick = (product) => {
    setEditedProduct({ ...product });
  };

  const handleSaveEdit = () => {
    if (
      editedProduct &&
      editedProduct.name &&
      editedProduct.price &&
      editedProduct.code
    ) {
      onUpdateProduct(editedProduct);
      setEditedProduct(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar los productos por código o nombre
  const filteredProducts = products.filter(
    (product) =>
      product.code.includes(searchTerm) ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-4">
      <h2>Lista de Productos</h2>
      <input
        type="text"
        placeholder="Buscar por código o nombre"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id}>
              <td>
                {editedProduct && editedProduct.id === product.id ? (
                  <input
                    type="text"
                    name="code"
                    value={editedProduct.code}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.code
                )}
              </td>
              <td>
                {editedProduct && editedProduct.id === product.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedProduct.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editedProduct && editedProduct.id === product.id ? (
                  <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                  />
                ) : (
                  `$${product.price}`
                )}
              </td>
              <td>
                {editedProduct && editedProduct.id === product.id ? (
                  <button
                    className="btn btn-success"
                    onClick={handleSaveEdit}
                  >
                    Guardar
                  </button>
                ) : (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditClick(product)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDeleteProduct(product.id)}
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
