import { useLocation } from "react-router-dom";

const Cartlist = () => {
    const location = useLocation();
   const updateProduct = location.state;
   console.log(updateProduct);
    return (
        <>
            {updateProduct.map((value, index) => (
                <li key={index} >
                    <h4>{value.name}</h4>
                    <p>{value.price}</p>
                </li>
            ))}
        </>
    );
};
export default Cartlist;
