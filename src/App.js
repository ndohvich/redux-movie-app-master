import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Hello : {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>{" "}
      <button onClick={() => dispatch(decrement(10))}>-</button>
      {isLogged ? (
        <h3>
          Hi you have the right to see this if you are logged in the APP
          Welcome.
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
