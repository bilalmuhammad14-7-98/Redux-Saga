import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./Redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const data = {
    name: "iphone",
    category: "mobile",
    price: 10000,
    color: "red",
  };

  return (
    <div className="App">
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

export default App;
