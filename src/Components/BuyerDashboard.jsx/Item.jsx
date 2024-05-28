import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Item = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchClicked, setSearchClicked] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);
  const [viewCart, setViewCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(true);
      }
    };

    fetchData();

    return () => {
      // Any clean-up code here
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  const handleAdd = (product) => {
    setAddedProducts((prevProducts) => [...prevProducts, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  const handleViewCart = () => {
    setViewCart(true);
  };

  const handleBackToProducts = () => {
    setViewCart(false);
  };

  return (
    <div>
      {!viewCart ? (
        <>
          <header>
            <p>Search for products:</p>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Enter product name..."
            />
            <button onClick={handleSearchClick}>Search</button>
            <button onClick={handleViewCart}>Go to Cart</button>
          </header>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {searchClicked && (
                <ul>
                  {filteredProducts.map((product) => (
                    <li key={product.id}>
                      <img src={product.image} alt={product.title} style={{ width: '50px' }} />
                      <p>{product.title}</p>
                      <button onClick={() => handleAdd(product)}>Add to Cart</button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </>
      ) : (
        <div>
          <h2>Cart</h2>
          {addedProducts.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {addedProducts.map((product, index) => (
                  <tr key={index}>
                    <td><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
                    <td>{product.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products in the cart.</p>
          )}
          <button onClick={() => alert('Start Payment')}>Start Payment</button>
          <button onClick={handleBackToProducts}>Back to Products</button>
        </div>
      )}
    </div>
  );
};

export default Item;
