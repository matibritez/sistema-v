import React, { useState } from "react";
import * as XLSX from "xlsx";

const ProductTable = ({
  products,
  onUpdateProduct,
  onDeleteProduct,
  handleSearchChange,
}) => {
  const [editedProduct, setEditedProduct] = useState(null);

  const handleEditClick = (product) => {
    if (product) {
      setEditedProduct({ ...product });
    }
  };
  
  const handleDownloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(products, {
      header: ["Codigo", "Nombre", "Precio"],
    });
    XLSX.utils.book_append_sheet(workbook, worksheet, "Productos");
    XLSX.writeFile(workbook, "lista_de_productos.xlsx");
  };

  return (
    <div>
      <h2 className="my-4">Listado de Productos</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto"
          onChange={handleSearchChange}
        />
      </div>
      <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <div className="input-group">
                <button
                  className="btn btn-primary"
                  onClick={handleDownloadExcel}
                >
                  Descargar Excel
                </button>
              </div>
            </div>
          </div>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.code}</td>
              <td>
                {editedProduct?.id === product.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedProduct.name}
                    onChange={(e) => {
                      setEditedProduct({
                        ...editedProduct,
                        name: e.target.value,
                      });
                    }}
                    className="form-control"
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editedProduct?.id === product.id ? (
                  <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={(e) => {
                      setEditedProduct({
                        ...editedProduct,
                        price: parseFloat(e.target.value),
                      });
                    }}
                    className="form-control"
                  />
                ) : (
                  product.price
                )}
              </td>
              <td>
                {editedProduct?.id === product.id ? (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      onUpdateProduct(editedProduct);
                      setEditedProduct(null);
                    }}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEditClick(product)}
                  >
                    Editar
                  </button>
                )}
                <button
                  className="btn btn-danger btn-sm mx-2"
                  onClick={() => onDeleteProduct(product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
