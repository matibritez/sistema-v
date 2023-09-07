import React, { useState, useEffect, useCallback } from "react";
import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs } from 'firebase/firestore';
import db from './firebase'; // Importa la instancia de Firestore
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import Navbar from "./Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Define fetchData utilizando useCallback
  const fetchData = useCallback(async () => {
    try {
      const productCollection = collection(db, "products");
      const querySnapshot = await getDocs(productCollection);
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filtrar los productos por código o nombre
      const filteredProducts = productsData.filter(
        (product) =>
          product.code.includes(searchTerm) ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Ordenar los productos alfabéticamente por nombre
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addProduct = async (newProduct) => {
    try {
      const productCollection = collection(db, 'products');
      await addDoc(productCollection, newProduct);
      fetchData();
      console.log('Producto agregado correctamente');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      const productDocRef = doc(db, 'products', updatedProduct.id);
      await updateDoc(productDocRef, updatedProduct);
      setEditedProduct(null);
      fetchData();
      console.log('Producto actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const productDocRef = doc(db, 'products', productId);
      await deleteDoc(productDocRef);
      fetchData();
      console.log('Producto eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <h1>Sistema de Ventas</h1>
      <div className="row">
        <Navbar />
        <div className="col-md-9">
          <ProductForm onAddProduct={addProduct} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ProductTable
            products={products}
            onUpdateProduct={updateProduct}
            onSaveEdit={setEditedProduct}
            editedProduct={editedProduct}
            onDeleteProduct={deleteProduct}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
