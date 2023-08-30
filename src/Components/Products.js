import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="productsss">
      <div className="pronav">
        <Link to="/products/collection" style={{padding : 10}}>Shops </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Products;

