import { React, useRef } from "react";

function RefDom() {
  let h2Ref = useRef(null);
  let buttonRef = useRef(null);
  const changeContentStyle = () => {
    h2Ref.current.innerText = "DOM Manipulated using Ref concept";
    h2Ref.current.style.color = "red";
    buttonRef.current.style.color = "red";
    buttonRef.current.style.padding = "10px 20px";
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2 ref={h2Ref}>DOM Manipulation using useRef() hook</h2>
      <br />
      <button ref={buttonRef} onClick={changeContentStyle}>
        Change content and style
      </button>
    </div>
  );
}

export default RefDom;
