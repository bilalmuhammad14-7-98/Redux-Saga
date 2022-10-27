import "../App";

import { addToCart } from "../Redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const data = {
    name: "iphone",
    category: "mobile",
    price: 10000,
    color: "red",
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(addToCart(data));
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Main;
