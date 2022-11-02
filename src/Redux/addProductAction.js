import { ADD_PRODUCT_REQUESTED } from "./constants";

export function addProduct(data) {
  console.log(data, "add product action");
  return {
    type: ADD_PRODUCT_REQUESTED,
    payload: data,
  };
}
