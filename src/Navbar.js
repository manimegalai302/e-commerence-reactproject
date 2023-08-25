import React from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{
return(
    <div className="navbar">
        <nav>
        <Link to ="./Login">Login</Link>
        <Link to ="./products">View products</Link>
        </nav>
    </div>
)
}
export default Navbar;