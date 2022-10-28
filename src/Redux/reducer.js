import { ADD_TO_CART } from "./constants";

export const cartData = (data = [], action) => {
  console.log(action, "reducer called");

  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    default:
      return [];
  }
};
