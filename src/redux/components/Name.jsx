import { useRef } from "react";
import { useDispatch } from "react-redux";

function Name() {
  let inputRef = useRef(null);
  let dispatch = useDispatch();
  const getData = () => {
    var actionObj = {
      type: "NAME",
      nameComp: inputRef.current.value,
    };
    dispatch(actionObj);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>Name component</h2>
      <br />
      <input ref={inputRef} type="text" placeholder="Add some data" />
      <button onClick={getData}>Submit</button>
    </div>
  );
}

export default Name;
