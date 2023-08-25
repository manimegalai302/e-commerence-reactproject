import React from 'react';
import Cart from "./addtocart/Cart";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="productdetails">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} id="img"/>
      <p>{product.description}</p>
      <h2>Price: Rs.{product.price}</h2>
      <button onClick={<Cart />}>Add to Cart</button> 
      <button onClick={onClose}>Back</button>
    </div>
  );
};

export default ProductDetails;
