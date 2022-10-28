import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants";

export const addToCart = (data) => {
  console.log(data, "action is called");
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = (data) => {
  console.log(data, "action remove to Cart");
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  console.log("action remove to Cart");
  return {
    type: EMPTY_CART,
  };
};
