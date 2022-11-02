import { combineReducers } from "redux";

import { cartData } from "./reducer";
import { productData } from "./productReducer";

import { users } from "./userReducer";

export default combineReducers({
  cartData,
  productData,
  users,
});
