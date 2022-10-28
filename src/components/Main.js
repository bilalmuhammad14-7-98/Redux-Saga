import "../App";
import { useEffect } from "react";
import { addToCart, removeToCart, emptyCart } from "../Redux/action";
import { productList } from "../Redux/productAction";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  const data = useSelector((state) => state.productData);
  console.log(data, "main page data");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Empty cart
      </button>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
