import { SET_PRODUCT_LIST } from "./constants";

export const productData = (data = [], action) => {
  console.log(action, "reducer called");

  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("SET_PRODUCT_LIST condition", action);
      return [...action.data];
    default:
      return data;
  }
};
