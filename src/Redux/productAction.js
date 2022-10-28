import { PRODUCT_LIST } from "./constants";

export const productList = () => {
  console.log("product list action is called");
  let data = "hello";
  return {
    type: PRODUCT_LIST,
    data,
  };
};
