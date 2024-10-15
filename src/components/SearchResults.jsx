import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import images from '../images'; // Assuming images is an array of product objects

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchQuery) {
          const filteredProducts = images.filter(product =>
            product.brand.toLowerCase().includes(searchQuery.toLowerCase())
            ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          setProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleAddToCart = async (product) => {
    const cartItems = JSON.parse(localStorage.getItem("alldata")) || [];

    // Check if the product is already in the cart
    const isAlreadyInCart = cartItems.some(item => item.id === product.id);

    if (isAlreadyInCart) {
      alert('Item is already in the cart');
    } else {
      // Add item to local storage
      const newCart = [...cartItems, product];
      localStorage.setItem("alldata", JSON.stringify(newCart));

      try {
        // Send item to the backend API
        await axios.post('https://amazon-back-2n80.onrender.com/api/products', product);
        alert('Product added to cart and server');
      } catch (error) {
        console.error('Error adding product to server', error);
        alert('Failed to add product to the server');
      }

      navigate('/cart');
    }
  };

  return (
    <>
      <div>
        <div>
          <h1 className='text-3xl fw-bold p-5 text-muted text-center'>Search Results</h1>
        </div>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <div className="grid grid-cols-12 p-6" key={index}>
                <div className='p-4 col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                  <img src={product.url} alt={product.name} className='col-span-4' style={{ height: '400px', width: '100%' }} />
                </div>
                <div className='p-6 col-span-12 lg:col-span-8 md:col-span-8 sm:col-span-12'>
                  <h1 className='font-bold text-3xl mt-8'>{product.name}</h1>
                  <h1 className='text-xl mt-2'>{product.desc}</h1>
                  <p className='text-xl font-bold mt-2'>Price: &#8377; {product.price}</p>
                  <p className='text-green-500 mt-2'>{product.paragraph}</p>
                  <p className='mt-2 text-lg'>Rating: {product.rating}</p>

                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 mt-4 rounded' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    <button
                      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 mt-4 rounded'
                      onClick={() => navigate('/')}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
      <div className='text-center mb-5'>
        <button className='btn btn-outline-primary' onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </>
  );
};

export default SearchResults;
