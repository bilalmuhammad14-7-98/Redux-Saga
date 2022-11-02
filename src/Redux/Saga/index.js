import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import addProductSaga from "./addProductSaga";

export default function* rootSaga() {
  yield all([userSaga(), addProductSaga()]);
}
