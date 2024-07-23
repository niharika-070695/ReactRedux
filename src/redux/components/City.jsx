import { useState } from "react";
import { cityActionCreator } from "../actions/CityAction";
import { useDispatch } from "react-redux";

function City() {
  let [city, setCity] = useState("");
  let dispatch = useDispatch();
  const getCity = () => {
    var cityAction = cityActionCreator(city);
    dispatch(cityAction);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>City component</h2>
      <br />
      <select
        onChange={(event) => {
          setCity(event.target.value);
        }}
      >
        <option>Select the city</option>
        <option>Seattle</option>
        <option>Kansas</option>
        <option>Denver</option>
        <option>Chicago</option>
      </select>
      <button onClick={getCity}>Submit</button>
    </div>
  );
}

export default City;
