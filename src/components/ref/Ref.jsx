import React from "react";
import { useState, useRef } from "react";
import "./Ref.css";
function Ref() {
  let [state, setState] = useState(null);
  let [data, setData] = useState(null);
  let info = useRef("hello");
  let value;
  const updateState = () => {
    setState(100);
  };
  const updateValue = () => {
    value = 500;
  };
  const updateData = () => {
    setData(1000);
  };

  const updateInfo = () => {
    info.current = "Welcome to React";
  };
  const displayValue = () => {
    console.log("State", state);
    console.log("Data", data);
    console.log("Variable", value);
    console.log("UseRef-info", info.current);
  };
  return (
    <div className="refContainer">
      <h2>Ref Component:{state}</h2>
      <button onClick={updateState}>Update State</button>
      <button onClick={updateData}>Update Data</button>
      <button onClick={updateValue}>Update Value</button>
      <button onClick={updateInfo}>Update Info</button>
      <button onClick={displayValue}>Display</button>
    </div>
  );
}

export default Ref;
