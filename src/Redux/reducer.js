import { ADD_TO_CART } from "./constants";

export const cartData = (data = [], action) => {
  console.log(action, "reducer called");
  //   if (action.type == ADD_TO_CART) {
  //     return data;
  //   } else {
  //     return "no action called";
  //   }

  switch (action.type) {
    case ADD_TO_CART:
      return 1 + 1;
    default:
      return "no action called";
  }
};
