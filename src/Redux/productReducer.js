import { PRODUCT_LIST } from "./constants";

export const productData = (data = [], action) => {
  console.log(action, "reducer called");

  switch (action.type) {
    case PRODUCT_LIST:
      console.log("PRODUCT_LIST condition", action);
      return [action.data];

    default:
      return data;
  }
};
