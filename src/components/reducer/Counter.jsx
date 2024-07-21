import { useReducer } from "react";
import "./Counter.css";
import counterReducer from "./counterReducer";
function Counter() {
  let [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const incCount = () => {
    dispatch({ type: "INCREASE" });
  };
  const decCount = () => {
    dispatch({ type: "DECREASE" });
  };
  const clearCount = () => {
    dispatch({ type: "CLEAR" });
  };
  return (
    <div className="reducerCounter">
      <h2>Counter app with useReducer() hook:{state.count}</h2>
      <button onClick={incCount}>IncreaseCount</button>
      <button onClick={decCount}>DecreaseCount</button>
      <button onClick={clearCount}>Clear</button>
    </div>
  );
}

export default Counter;
