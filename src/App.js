import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (productID) => {
    const updatedProducts = products.filter(
      (product) => product.productID !== productID
    );
    setProducts(updatedProducts);
  };

  const getTotalValue = () => {
    return products.reduce((total, product) => total + Number(product.sellingPrice), 0);
  };

  return (
    <div>
      <h1>Ecommerce Seller</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
      <h2>Total Value worth of Products: ₹{getTotalValue()}</h2>
    </div>
  );
};

export default App;
