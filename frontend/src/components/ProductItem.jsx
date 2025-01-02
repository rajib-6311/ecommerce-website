import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";


const ProductItem = ({item}) => {

    const {_id, image,name, price} = item;
   
    const {currency} = useContext(ShopContext);
    const defaultImage = "https://via.placeholder.com/150";

    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${_id}`}>
            {/* <div className="overflow hidden">
               <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="" /> 
            </div> */}
            <div className="overflow-hidden">
                <img
                    className="hover:scale-110 transition ease-in-out"
                    src={image && image[0] ? image[0] : defaultImage}
                    alt={name}
                />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency} {price}</p>
        </Link>
    );
};

export default ProductItem;