import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import FaTimes icon from react-icons/fa
import axios from 'axios';

const Details = ({ product, onClose, onAddToCart, onBuyNow }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('XS');

  const handleAddToCart = async () => {
    // Prepare the product object with quantity and size
    const productWithDetails = { ...product, quantity, size };
    try {
      const response = await axios.post('/api/cart/add', productWithDetails);
      if (response.status === 200) {
        onAddToCart(productWithDetails);  // Update parent state
        setAddedToCart(true);
        setTimeout(() => {
          setAddedToCart(false);
        }, 3000); // Reset addedToCart after 3 seconds
      } else {
        console.error('Failed to add to cart:', response.status, response.data);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  if (!product) return null; // If product is null, return null to prevent rendering

  const isFashionWomenProduct = product.category === 'Fashion' && product.gender === 'Women';

  return (
    <>
      <div className="details-overlay">
        <div className="details-dialog">
          <button className="close-btn" onClick={onClose}><FaTimes /></button> {/* Use FaTimes icon */}
          <div className="added-to-cart-message-container">
            {addedToCart && <p className="added-to-cart-message">Added to Cart!</p>}
          </div>
          <div className="image-container">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="details-content">
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Review: {product.review}</p>
              <p>Price: {product.price}</p>
            </div>
            {isFashionWomenProduct && (
              <div className="dropdowns">
                <label htmlFor="quantity">Quantity:</label>
                <select id="quantity" value={quantity} onChange={handleQuantityChange}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
                <label htmlFor="size">Size:</label>
                <select id="size" value={size} onChange={handleSizeChange}>
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="action-buttons">
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={() => onBuyNow(product)}>Buy Now</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .details-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .details-dialog {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          max-width: 800px;
          width: 90%;
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
          color: red;
        }

        .image-container {
          flex: 1;
          padding-right: 20px;
          max-height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .details-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding-left: 20px;
        }

        .product-details {
          flex: 1;
          margin-bottom: 20px;
        }

        .dropdowns {
          margin-bottom: 20px;
        }

        .dropdowns label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .dropdowns select {
          width: 100%;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
        }

        .action-buttons button {
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .action-buttons button:hover {
          background-color: #0056b3;
        }

        .added-to-cart-message-container {
          position: absolute;
          top: 10px; /* Adjust as needed */
          left: 50%;
          transform: translateX(-50%);
          z-index: 1; /* Ensure the message is above other content */
        }

        .added-to-cart-message {
          color: green;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default Details;
