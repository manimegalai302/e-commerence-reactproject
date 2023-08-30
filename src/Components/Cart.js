import React, { useState } from "react";
import { useLocation,useNavigate} from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const cartProducts = location.state.cartProduct;

  const [quantities, setQuantities] = useState(cartProducts.map(() => 1));
 

  function handleQuantityChange(index, change) {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change);
    setQuantities(newQuantities);
  }

  function handlePopup() {
   alert('Thank you for purchasing');
   navigate('/');
  }

  const total = cartProducts.reduce(
    (acc, item, index) => acc + item.cartValues.price * quantities[index],
    0
  );

  return (
    <div>
      {cartProducts.map((item, index) => (
        <div className="cartitem" key={index}>
          <img
            src={item.cartValues.image}
            alt=""
            id="cartimg"
            width="5%"
            height="5%"
          />

          <h6>{item.cartValues.title}</h6>
          <p className="quantity">
            <span id="quan"> Quantity: {quantities[index]}</span>
            <button onClick={() => handleQuantityChange(index, 1)}>+</button>
            <button onClick={() => handleQuantityChange(index, -1)}>-</button>
          </p>
          <h4>${item.cartValues.price}</h4>
          <footer>
            <p className="cal">Total: ${item.cartValues.price * quantities[index]}</p>
            </footer>
        </div>
      ))}

      <div className="total">
        <p>Total: ${total}</p>
      </div>

      <button className="buy" onClick={handlePopup}>
        Buy
      </button>
    </div>
  );
};

export default Cart;



