import React from 'react';
import { Link } from 'react-router-dom'; 
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import offerImage from './offerImage.jpg'; // Import offer image

const Home = () => {
  // Styles
  const headingStyle = {
    fontSize: '50px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#B5838D', // Blue color
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const offerCardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    marginBottom: '20px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    textAlign: 'center', // Center text
  };

  const offerImageStyle = {
    width: '100%', // Make the width 100% to span across the screen
    height: 'auto', // Make the height auto to maintain aspect ratio and show the full image
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const contentStyle = {
    maxWidth: '1600px', // Increase the max width
    margin: '0 auto',
  };

  const imageCardStyle = {
    marginBottom: '20px',
    width: '100%',
  };

  const alternateStyle = {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  };

  const contentTextStyle = {
    flex: '1',
    padding: '20px',
  };

  const productImageStyle = {
    width: '70%', // Adjust the width of the images
    height: 'auto', // Make the height auto to maintain aspect ratio
    objectFit: 'cover',
    borderRadius: '10px 0 0 10px',
  };

  const offerOfTheDayStyle = {
    position: 'absolute',
    top: '10px',
    right: '30px',
    color: '#fff',
    padding: '10px 80px', // Increased padding
    borderRadius: '150px',
    fontWeight: 'bold',
    width: 'fit-content', // Make the width fit the content
    backgroundColor: '#DD0000', // Price tag color
  };

  return (
    <div>
      {/* Offer Card */}
      <div style={offerCardStyle}>
        <div style={offerOfTheDayStyle}>OFFER OF THE DAY</div>
        <img src={offerImage} alt="Offer" style={offerImageStyle} />
        <p>Explore our new products which go on Summer scale this season.Happy Shopping !</p>
        <Link to="/allproducts">
          <button style={buttonStyle}>Claim Now</button>
        </Link>
      </div>

      {/* Rest of the content */}
      <div style={contentStyle}>
        {/* Image 1 Card */}
        <div style={imageCardStyle}>
          <div style={alternateStyle}>
            <img src={image1} alt="Product 1" style={productImageStyle} />
            <div style={contentTextStyle}>
              <h1 style={headingStyle}>Shop Your needs</h1>
              <p>You are just one click away.</p>
              <Link to="/allproducts">
          <button style={buttonStyle}>Buy Now</button>
        </Link>
            </div>
          </div>
        </div>

        {/* Image 2 Card */}
        <div style={imageCardStyle}>
          <div style={alternateStyle}>
            <div style={contentTextStyle}>
              <h2 style={headingStyle}>Easy Payment and tracking !</h2>
              <p>Track your product till your doorstep</p>
              <Link to="/allproducts">
          <button style={buttonStyle}>Buy Now</button>
        </Link>
            </div>
            <img src={image2} alt="Product 2" style={productImageStyle} />
          </div>
        </div>

        {/* Image 3 Card */}
        <div style={imageCardStyle}>
          <div style={alternateStyle}>
            <img src={image3} alt="Service" style={productImageStyle} />
            <div style={contentTextStyle}>
              <h2 style={headingStyle}>Deal for each month</h2>
              <p>Reasonable pricing</p>
              <button style={buttonStyle}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
