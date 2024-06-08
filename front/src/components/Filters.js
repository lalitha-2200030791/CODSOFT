import React, { useState } from 'react';

const Filters = ({ products, onFilter }) => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilter(e.target.value, price);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    onFilter(category, e.target.value);
  };

  const categories = Array.from(new Set(products.map((product) => product.category)));
  const prices = Array.from(new Set(products.map((product) => product.price)));

  return (
    <div className="filters">
      <h3>Filters</h3>
      <div className="filter-item">
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="price">Price:</label>
        <select id="price" value={price} onChange={handlePriceChange}>
          <option value="">All</option>
          {prices.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <style>
        {`
          .filters {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 10px;
            width: 200px; /* Adjust the width as needed */
            position: fixed;
            left: 20px; /* Adjust the left position as needed */
            top: 100px; /* Adjust the top position as needed */
          }

          .filter-item {
            margin-bottom: 20px;
          }

          label {
            font-weight: bold;
            margin-right: 10px;
          }

          select {
            width: 100%;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #ccc;
          }

          select:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
          }

          option {
            color: #000;
          }
        `}
      </style>
    </div>
  );
};

export default Filters;
