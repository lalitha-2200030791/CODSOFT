import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2px 10px', // Adjusted padding
    textAlign: 'center',
    width: '100%',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    fontSize: '12px', // Adjusted font size
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '1.5rem',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <h3>Contact Us</h3>
        <ul style={listStyle}>
          <li>Email: Shoppo@gamil.com</li>
          <li>Phone: 7345812646</li>
          <li>Helpline: 24x7 Support</li>
        </ul>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Shoppo. All rights reserved.</p>
        {/* Add social media icons */}
        <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
        <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
        <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
      </div>
    </footer>
  );
};

export default Footer;
