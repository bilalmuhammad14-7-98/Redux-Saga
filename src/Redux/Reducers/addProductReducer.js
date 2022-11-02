import {
  ADD_PRODUCT_REQUESTED,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
} from "../constants";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const addProduct = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUESTED:
      console.log(action, "product requested reducer");
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      console.log(action, "product success reducer");
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case ADD_PRODUCT_FAILED:
      console.log(action, "product faild reducer");
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
