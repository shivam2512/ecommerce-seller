import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productID, setProductID] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ productName, productID, sellingPrice });
    setProductName('');
    setProductID('');
    setSellingPrice('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Product ID:
          <input
            type="text"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
            required
          />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        
        <label>
          Selling Price:
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
