import "../App";
import { useState } from "react";
import { useEffect } from "react";
import { addToCart, removeToCart, emptyCart } from "../Redux/action";
import { productList } from "../Redux/productAction";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/userAction";
import { addProduct } from "../Redux/addProductAction";

function Main() {
  const [userData, setUserData] = useState();
  const data = useSelector((state) => state.productData);
  const user = useSelector((state) => {
    // console.log(state.users.users.results, "user data");
    return state.users.users;
  });

  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => {
    console.log(state.users, "errorrrrrrrrrrrr");
    return state.users.error;
  });
  console.log(data, "main page data");
  console.log(user, "users data");
  console.log(loading, "loading state");
  console.log(error, "error");

  const dispatch = useDispatch();

  useEffect(() => {
    setUserData(user.results);
  }, [user, loading, error]);

  let idData = {
    id: 1,
  };

  let postData = {
    name: "Mac Book",
    color: "black",
    price: 20000,
    category: "Laptop",
    brand: "Apple",
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Empty cart
      </button>

      <button onClick={() => dispatch(getUsers(idData))}>Get User Data</button>
      <button onClick={() => dispatch(addProduct(postData))}>
        Add Product
      </button>
      {loading ? <>loading.....</> : null}
      {error != null ? <>Network Error</> : null}
      {/* {} */}
      <div className="product-container">
        {userData ? (
          <>
            {" "}
            {userData.map((item) => (
              <div key={item.id.value} className="product-item">
                <img src={item.picture.large} />
                <div>Name : {item.name.first} </div>
                <div>Gender : {item.gender} </div>
              </div>
            ))}
          </>
        ) : null}
      </div>

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
