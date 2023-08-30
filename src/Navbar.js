import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Components/auth";
const Navbar=()=>{
    const auth = useAuth();
return(
    <div className="navbar">
        <nav>
        <Link to ="/">Home</Link>   
        <Link to ="./products">Products</Link>
        <Link to ="./profile">Profile</Link>
        {
            !auth.user && (
                <Link to ="./login">Login</Link>
            )
        }
        </nav>
       
    </div>
)
}
export default Navbar;