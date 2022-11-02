import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "@redux-saga/core";
// import createSagaMiddleware from "@redux-saga";
import rootSaga from "./Saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

// sagaMiddleware.run(productSaga);
sagaMiddleware.run(rootSaga);

export default store;
