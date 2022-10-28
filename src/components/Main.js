import "../App";

import { addToCart, removeToCart, emptyCart } from "../Redux/action";
import { productList } from "../Redux/productAction";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  const data = useSelector((state) => state.productData);
  console.log(data, "main page data");

  const dispatch = useDispatch();
  const product = {
    name: "iphone",
    category: "mobile",
    price: 10000,
    color: "red",
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add to cart
      </button>

      <button
        onClick={() => {
          dispatch(removeToCart(product.name));
        }}
      >
        Remove to cart
      </button>
      <button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Empty cart
      </button>
      <button
        onClick={() => {
          dispatch(productList());
        }}
      >
        Call Product List
      </button>
    </div>
  );
}

export default Main;
