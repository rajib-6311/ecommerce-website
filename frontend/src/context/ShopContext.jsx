import { createContext } from "react";
import { products } from "../assets/assets";
import PropTypes from 'prop-types';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_free = 10;

  const value = {
    products,
    currency,
    delivery_free,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node, // Accepts any valid React child
};

export default ShopContextProvider;
