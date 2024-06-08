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
  select: {
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

const Register = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <div style={styles.formContainer}>
        <h2>Register</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
          />
          <select style={styles.select}>
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="password"
            placeholder="New Password"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            style={styles.input}
          />
          <button type="submit" style={styles.submitButton}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
