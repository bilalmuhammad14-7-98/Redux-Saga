import { combineReducers } from "redux";

import { cartData } from "./reducer";
import { productData } from "./productReducer";

import { users } from "./userReducer";
import { addProduct } from "./Reducers/addProductReducer";

export default combineReducers({
  cartData,
  productData,
  users,
  addProduct,
});
