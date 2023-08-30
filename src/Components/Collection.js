import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = "https://fakestoreapi.com/products";

const List = () => {
  let navigate =useNavigate();
  const [products, setProducts] = useState([]); 
  const [search, setSearch] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [cartItem, setCartItem] = useState([]); 

 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api);
        const data = response.data;
        setProducts(data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []); 

  useEffect(() => {
    const filterData = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filterData);
  }, [search, products]);



  const handleCart = (product) => {
    console.log(product);
    setCartItem([...cartItem, {cartValues : product}]);
  
  
   }
  
  return (
    <>

    <div >
      <button className="cart-box" onClick={()=>navigate("/products/Cart",{state:{cartProduct:cartItem}})}>CART</button>
    </div>
    <div className="content">
        <h1>Product Lists</h1>
        <div className="listsearch">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div  className="data">
            <img src={product.image} alt={product.title} id="img" />
            <h3>{product.title}</h3>
            <p id="des">{product.description}</p>
            <h4>${product.price}</h4>
         
            <button id="cart"onClick={()=>handleCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
    </>
    
  );
};

export default List;



