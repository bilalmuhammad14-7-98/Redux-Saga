import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants";

export const cartData = (data = [], action) => {
  console.log(action, "reducer called");

  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart reducer", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("remove from cart reducer", action);
      const remainingItems = data.filter((item) => item.id != action.data);
      return [...remainingItems];
    case EMPTY_CART:
      data = [];
      console.log("empty cart reducer", action);
      return [...data];
    default:
      return data;
  }
};
