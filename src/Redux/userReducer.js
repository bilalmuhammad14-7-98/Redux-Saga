import {
  GET_USERS_REQUESTED,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
} from "./constants";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      console.log(action, "user requested reducer");
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      console.log(action, "user success reducer");
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case GET_USERS_FAILED:
      console.log(action, "user faild reducer");
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
