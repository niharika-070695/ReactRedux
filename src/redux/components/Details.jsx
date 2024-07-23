import React from "react";
import { useSelector } from "react-redux";
function Details() {
  let data = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div style={{ padding: "100px" }}>
      <h2>Details component</h2>
      <p style={{ color: "green", fontWeight: "bold", fontSize: "21px" }}>
        {data.name}
      </p>
    </div>
  );
}

export default Details;
