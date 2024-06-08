import React from 'react';
import logo from './logo.jpg'; // Import your logo image

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    minHeight: '100vh', // Ensure the content fills the screen
  },
  logo: {
    height: '80px', // Adjust the logo size as needed
    marginBottom: '2rem',
  },
  formContainer: {
    width: '300px', // Adjust the form container width as needed
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '1rem',
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: '1rem',
    padding: '0.5rem',
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  submitButton: {
    padding: '0.5rem',
    backgroundColor: '#B5838D',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
};

const Login = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <div style={styles.formContainer}>
        <h2>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
          />
          <button type="submit" style={styles.submitButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
