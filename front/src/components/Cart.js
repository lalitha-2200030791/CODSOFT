import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const Cart = ({ cartItems }) => {
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to handle asynchronous data fetching
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cart');
        setCart(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cart data:', error);
        setIsLoading(false);
      }
    };
  
    fetchCartData();
  }, []);
  // State to store cart data
  const [cart, setCart] = useState([]);

  // Function to handle deleting an item from the cart
  const handleDeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  if (isLoading) {
    return <p>Loading...</p>; // Display a loading indicator while fetching data
  }

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} style={{ width: '100px' }} />
            <div>
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Review: {item.review}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Size: {item.size}</p>
            </div>
            <div className="buttons">
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
