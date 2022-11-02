import { call, put, takeEvery } from "redux-saga/effects";

import {
  ADD_PRODUCT_REQUESTED,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
} from "../constants";

function* addProduct(action) {
  console.log(action, "data from function");

  //   var formdata = new FormData();
  //   formdata.append("name", "Mac Book");
  //   formdata.append("color", "someid");
  //   formdata.append("price", "cses");
  //   formdata.append("category", "cx");
  //   formdata.append("brand", "cx");
  try {
    let data = yield fetch("http://localhost:3500/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        // title: "foo",
        // body: "bar",
        // userId: 1,
        name: "Mac Book",
        color: "black",
        price: 20000,
        category: "Laptop",
        brand: "Apple",
      }),
    });
    console.log(data, "Before api dataaaaaaa");
    data = yield data.json();
    console.log(data, "api dataaaaaaa");

    // dispatch a success action to the store with the customers
    yield put({ type: ADD_PRODUCT_SUCCESS, data: data });
  } catch (error) {
    console.log(error, "error");
    // dispatch a failure action to the store with the error
    yield put({ type: ADD_PRODUCT_FAILED, error });
  }
}

function* addProductSaga() {
  yield takeEvery(ADD_PRODUCT_REQUESTED, addProduct);
}

export default addProductSaga;
