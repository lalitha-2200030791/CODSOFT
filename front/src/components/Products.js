import React, { useState} from 'react';
import Filters from './Filters';
import Details from './Details';



  const productData = [
    {
      name: 'Wireless Headphones',
      image: 'https://vlebazaar.in/image/cache/catalog/B0856HNMR7/boAt-Rockerz-370-Wireless-Headphone-with-Bluetooth-50-Immersive-Audio-Lightweight-Ergonomic-Design-Cosy-Padded-Earcups-and-Up-to-12H-Playback-Bliss-Buoyant-Black-B0856HNMR7-1100x1100.jpg.webp',
      review: 'Excellent sound quality and comfortable fit. Highly recommended!',
      category: 'Electronics',
      price: '$49.99'
    },
    {
      name: 'Smart Watch',
      image: 'https://kanizaa.com/wp-content/uploads/2024/02/Artboard1-768x768.png',
      review: 'Very intuitive and packed with useful features. A must-have for tech enthusiasts.',
      category: 'Electronics',
      price: '$99.99'
    },
    {
      name: 'Fitness Tracker',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGJ59OrDvc-fG72JztLmYyzVQvjmTVcUTE6s_eLYW7J7vdyGlQTQPbxvYH3R77C1D9hMRkLpwmuvhJD0S0jE8ev49zPvEVJ6WeZasi34w&usqp=CAE',
      review: 'This fitness tracker has motivated me to stay active and reach my goals.',
      category: 'Electronics',
      price: '$79.99'
    },
    {
      name: 'Noise-Canceling Earbuds',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNP_vfiK933BNQ8rIEfei0-hVeTSbDhLMKKUFD1DaFd1qHqGg1-HwnQrQanSCHTJw__2mf5nKDk1Ao_NLwk6NdtZkZZgLKfaUYittlfTOg2maD4zckpwa-XQ&usqp=CAE',
      review: 'Perfect for blocking out distractions and enjoying your music or podcasts.',
      category: 'Electronics',
      price: '$129.99'
    },
    {
      name: 'Virtual Reality Headset',
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTjjROlqjw0vNQ8kVe-ny3y-zky2s2xUCrl4DUyjC473dVcBLznTrZFBEwykEOUh1sQC467hQ5D5jiwwHsn5uLSaUslkPac43LagwiXn8pYCyPjSH5FL3PQ&usqp=CAE',
      review: 'Immersive experience like no other. A game-changer for entertainment and gaming.',
      category: 'Electronics',
      price: '$199.99'
    },
    {
      name: 'Portable Power Bank',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFl7d6OcUzkzkzH5ID1Vs9dieVnD79OxBQDByLzduA07IiUpdEcqz5r-9tms0SKz-YTv3bdqlnC2bPZ5tcxRxcLnugdQ7LTm7asrSVaUB5H5763CE1I7QMBg&usqp=CAE',
      review: 'Never run out of battery again with this reliable and high-capacity power bank.',
      category: 'Electronics',
      price: '$39.99'
    },
    {
      name: 'Wireless Charging Pad',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT8GCNQSmuQds5cPEOejFkaZmqKPBZ3gF61vef6tdYHsToa7bJux3h75YHGrYoq6crfEYhoKA4j1-ZRZ-4yM5T5ML_D8tjk7Y4RbZfRgSbjkw1Tq_6aFFJ5&usqp=CAE',
      review: 'Convenient and hassle-free charging experience. No more tangled cords!',
      category: 'Electronics',
      price: '$19.99'
    },
    {
      name: 'Bluetooth Speaker',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR6Of7ghOUQjFttUrX2YxcvknPW81bRaAgSqxXcUfauu3AK8gQnGeoqMVEuj8UFD-P94RkdUjIDCXxZC-BZFitsRIp6uNk2odfze6rLD9aWkzNrHE_kMYzU&usqp=CAE',
      review: 'Delivers powerful sound and bass for an immersive audio experience.',
      category: 'Electronics',
      price: '$79.99'
    },
    {
      name: 'Action Camera',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxiewmR3taQIV9I80w7MXDgLxzYhDN_raYkyfg_3_DW5Hr1-SbBQjb3eOPn8b2qcpw3r4qnPAtntMWxUUayVp0pI8SJEloV5Mad477y_6pTsNnntJWHMHP4g&usqp=CAE',
      review: 'Capture your adventures in stunning 4K quality with this rugged action camera.',
      category: 'Electronics',
      price: '$149.99'
    },
    {
      name: 'Smart Home Hub',
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlqheQVnfVea4kINdi7b58WfRyPi0UDbyYqVH58qsDhrMhwsWk-eJ9_gte-hHOMxIPNEzsn4P8jxojMIrj9qd5ah42p67ypKNz5aYRmFwhgQsdbD0J58UA&usqp=CAE',
      review: 'Control all your smart home devices from a single hub. Convenience at its best!',
      category: 'Electronics',
      price: '$199.99'
    },
    {
      name: 'Saree',
      image: 'https://www.karagiri.com/cdn/shop/products/BANDHANIKALAM-1003_3.jpg?v=1668076232',
      review: 'Cotton fabric with Maharashtrian design',
      category: 'Fashion/Women',
      price: '$249.99'
    },
    {
      name: 'Jumpsuit',
      image: 'https://apisap.fabindia.com/medias/20158858-01.jpg?context=bWFzdGVyfGltYWdlc3wxODI5Mzh8aW1hZ2UvanBlZ3xhRGN6TDJobFpDOHpNRGszTXpJek56UTVNemM1TUM4eU1ERTFPRGcxT0Y4d01TNXFjR2N8MDg5YzVhMjZjYmI3NzFiNGJlNjViYjFkYjQ4Y2QzZmQxODYyYTU5ZGVhNDJjNGM1ZjBiMTA4ZDVmNTMyNDJmZg',
      review: 'Beautiful jumpsuit with extendable cotton belt',
      category: 'Fashion/Women',
      price: '$199.99'
    },
    {
      name: 'Salwaar Suit',
      image: 'https://www.libas.in/cdn/shop/files/mustard-woven-design-silk-blend-straight-kurta-with-trousers-and-dupatta-libas-1-27588709187734_720x.jpg?v=1695052559',
      review: 'Beautiful Salwaar set with attached duppatta and ankle-length trousers',
      category: 'Fashion/Women',
      price: '$79.99'
    },
    {
      name: 'Jeans Top',
      image: 'https://www.kalaloom.com/cdn/shop/products/oct151060.jpg?v=1666157647&width=713',
      review: 'Authentic Jeans top best for daily wear',
      category: 'Fashion/Women',
      price: '$79.99'
    },
    {
      name: 'coords set',
      image: 'https://nolabels.in/cdn/shop/files/13672048_32.jpg?v=1704867953&width=900',
      review: 'Cords set best for Summers and exotic dress styles',
      category: 'Fashion/Women',
      price: '$199.99'
    },
    {
      name: 'Jeans',
      image: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI200933336001_alternate10?$rl_df_pdp_5_7_a10$',
      review: 'Summer blue jeans with comfy fabric',
      category: 'Fashion/Women',
      price: '$99.99'
    },
    {
      name: 'Night Wear',
      image: 'https://bunkari.in/cdn/shop/products/84A9801.jpg?v=1665381426',
      review: 'Night Wear for a good sleep, with the best ctton fabric',
      category: 'Fashion/Women',
      price: '$49.99'
    },
    {
      name: 'Frock',
      image: 'https://i.pinimg.com/736x/b8/e1/20/b8e1207296e93af880d08e752f0684af.jpg',
      review: 'Beautiful long dress with floral design',
      category: 'Fashion/Women',
      price: '$249.99'
    },
    {
      name: 'Casual Shirt',
      image: 'https://sslimages.shoppersstop.com/sys-master/images/h2e/ha6/30130927370270/S23MSH2204_BLUE_alt1.jpg_2000Wx3000H',
      review: 'Cotton fabric with Hawaian Design',
      category: 'Fashion/Men',
      price: '$249.99'
    },
    {
      name: 'Trousers',
      image: 'https://images.meesho.com/images/products/229654241/nbvvr_512.webp',
      review: 'Trousers with a royal shade !',
      category: 'Fashion/Men',
      price: '$199.99'
    },
    {
      name: 'T-Shirt',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYgjzHRfwgN_4m3eGskv3SyltU1iXUfzpVSzdy74wOQ&s',
      review: 'Grey tShirt for your next ocassion',
      category: 'Fashion/Men',
      price: '$79.99'
    },
    {
      name: 'Jeans',
      image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/21085650/2023/6/13/cd319e42-169d-46dd-838e-c2a83f7b8d721686632515107-Calvin-Klein-Jeans-Men-Blue-Straight-Fit-Light-Fade-Pure-Cot-1.jpg',
      review: 'Authentic Jeans best for daily wear',
      category: 'Fashion/Men',
      price: '$79.99'
    },
    {
      name: 'Kurtha',
      image: 'https://www.tistabene.com/cdn/shop/products/KRT-0284C.jpg?v=1694081032&width=1080',
      review: 'Make your festivals look shining with this kurtha',
      category: 'Fashion/Men',
      price: '$199.99'
    },
    {
      name: 'Gym Wear',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZu4TaikDcRujyl8JKmN6xGMz71uxrdWbnsGlyTRrUw&s',
      review: 'Gym wear with comfy fabric',
      category: 'Fashion/Men',
      price: '$99.99'
    },
    {
      name: 'Sweatshirt',
      image: 'https://www.beyours.in/cdn/shop/files/baby-pink-sweatshirt-1.jpg?v=1695718456&width=1200',
      review: 'Sweatshirts for a comfy winter !',
      category: 'Fashion/Men',
      price: '$49.99'
    },
    {
      name: 'Coat',
      image: 'https://www.beyours.in/cdn/shop/files/baby-pink-sweatshirt-1.jpg?v=1695718456&width=1200',
      review: 'Best Winter Wear by shoppo',
      category: 'Fashion/Men',
      price: '$249.99'
    },
  ];
  function Product({ products }) {
  const [flippedCards,] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = (index) => {
    setSelectedProduct(filteredProducts[index]);
    setShowDetails(true);
  };

  const handleDetailsButtonClick = (e, index) => {
    e.stopPropagation(); // Prevent card click when Details button is clicked
    setSelectedProduct(filteredProducts[index]);
    setShowDetails(true);
  };

  const handleFilter = (category, price) => {
    const filtered = productData.filter((product) => {
      const categoryMatch = category === '' || product.category === category;
      const priceMatch = price === '' || product.price === price;
      return categoryMatch && priceMatch;
    });
    setFilteredProducts(filtered);
    setSelectedProduct(null); // Reset selected product when 
  };
  // eslint-disable-next-line
  const handleDetails = (product) => {
    setSelectedProduct(null);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };
  
  return (
    <div className="container">
      <div className="filters-container">
        <Filters products={productData} onFilter={handleFilter} />
      </div>
      <div className="products-container">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className={`product-card ${flippedCards[index] ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="inner">
              <div className="front">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <button onClick={(e) => handleDetailsButtonClick(e, index)}>Details</button>
              </div>
              <div className="back">
                <p>{product.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showDetails &&  (
        <Details
          product={selectedProduct}
          onClose={handleCloseDetails}
          onAddToCart={(product) => console.log('Added to cart:', product)}
          onBuyNow={(product) => console.log('Buy now :', product)} />
          
      )}
      
      {/* Enclose the <style> tag within curly braces */}
      <style>
        {`
          .container {
            display: flex;
          }

          .filters-container {
            flex: 1;
            padding: 0px;
          }

          .products-container {
            flex: 2;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .product-card {
            width: 200px;
            height: 300px;
            margin: 40px;
            perspective: 1000px;
            cursor: pointer;
          }
          .product-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }

          .inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.5s;
            transform-style: preserve-3d;
          }

          .front,
          .back {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            backface-visibility: hidden;
            border-radius: 10px;
          }

          .front {
            background-color: #f0f0f0;
          }

          .back {
            background-color: #fff;
            transform: rotateY(180deg);
          }

          .product-card.flipped .inner {
            transform: rotateY(180deg);
          }

          h3 {
            margin-top: 10px;
          }

          button {
            margin-top: 10px;
            padding: 5px 10px;
            background-color: #B5838D;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #0056b3;
          }

          img {
            max-width: 80%;
            max-height: 80%;
            object-fit: contain;
          }
        `}
      </style>
    </div>
  );
}

export default Product;

