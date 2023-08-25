import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./Addtocart/ProductDetails"; 

const api = "https://fakestoreapi.com/products";

const Products = () => {
  const [products, setProducts] = useState([]); 
  const [search, setSearch] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [selectedProduct, setSelectedProduct] = useState(null); 

  async function fetchData() {
    try {
      const response = await axios.get(api);
      const data = response.data;
      setProducts(data);
      setFilteredProducts(data); 
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filterData);
  }, [search, products]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="content">
      <h1>Product list</h1>
      <div className="listsearch">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="products">
        {selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onClose={handleCloseDetails}
          />
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="data"
              onClick={() => handleProductClick(product)}
            >
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} id="img" />
              <h2>Rs.{product.price}</h2>
              <button>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
