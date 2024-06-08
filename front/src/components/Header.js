import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import searchpic from './searchpic.jpg';
import cartpic from './cartpic.png';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#FBF7D5',
  },
  logo: {
    height: '40px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '400px',
  },
  search: {
    padding: '0.5rem',
    flex: 1,
    border: 'none',
    outline: 'none',
  },
  searchButton: {
    padding: '0.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  searchpic: {
    height: '18px',
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
  },
  cartpic: {
    height: '24px',
  },
  cartQuantity: {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px',
  },
  button: {
    padding: '0.5rem 1rem',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    marginLeft: '10px',
    transition: 'background-color 0.3s ease', // Added transition for smooth hover effect
  },
  viewProductsButton: {
    backgroundColor: '#282D40',
  },
  loginButton: {
    backgroundColor: '#B5838D',
  },
  registerButton: {
    backgroundColor: '#B5838D',
  },
  buttonHover: {
    backgroundColor: 'yellow', // Highlight color for hover effect
    color: 'black', // Change text color on hover
  },
};

const Header = ({ products, onSearch, setSearchResults, cart = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredProducts);
    setSearchResults(filteredProducts);
  };

  const cartQuantity = cart.length;

  return (
    <header style={styles.header}>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>
      </div>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search your products"
          style={styles.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button style={styles.searchButton} onClick={handleSearchClick}>
          <img src={searchpic} alt="Search" style={styles.searchpic} />
        </button>
      </div>
      <Link to="/cart" style={styles.cart}>
        <img src={cartpic} alt="Cart" style={styles.cartpic} />
        {cartQuantity > 0 && <div style={styles.cartQuantity}>{cartQuantity}</div>}
      </Link>
      <div>
        <Link
          to="/allproducts"
          style={{ ...styles.button, ...styles.viewProductsButton }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.color = styles.buttonHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.viewProductsButton.backgroundColor;
            e.target.style.color = styles.button.color;
          }}
        >
          View Products
        </Link>
        <Link
          to="/login"
          style={{ ...styles.button, ...styles.loginButton }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.color = styles.buttonHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.loginButton.backgroundColor;
            e.target.style.color = styles.button.color;
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={{ ...styles.button, ...styles.registerButton }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.color = styles.buttonHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.registerButton.backgroundColor;
            e.target.style.color = styles.button.color;
          }}
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
