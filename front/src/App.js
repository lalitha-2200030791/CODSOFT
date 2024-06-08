import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart items from the backend when the component mounts
    const fetchCart = async () => {
      try {
        const response = await axios.get('/api/cart');
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  const handleSearch = (filteredProducts) => {
    setSearchResults(filteredProducts);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  
  return (
    <Router>
      <div>
        <Header 
          onSearch={handleSearch} 
          setSearchResults={setSearchResults} 
          cart={cart} 
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Products products={searchResults} />} />
          <Route path="/details" element={<Details onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
