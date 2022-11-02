import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_REQUESTED,
} from "../constants";

function* fetchUsers(action) {
  console.log(action, "data from function");
  try {
    let data = yield fetch("https://randomuser.me/api/");
    data = yield data.json();
    console.log(data, "api dataaaaaaa");

    // dispatch a success action to the store with the customers
    yield put({ type: GET_USERS_SUCCESS, users: data });
  } catch (error) {
    console.log(error, "error");
    // dispatch a failure action to the store with the error
    yield put({ type: GET_USERS_FAILED, error });
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS_REQUESTED, fetchUsers);
}

export default userSaga;
