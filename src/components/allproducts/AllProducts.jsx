import React from "react";
import axios from "axios";
import { useState } from "react";
import "./AllProducts.css";
import Card from "../card/Card";
function AllProducts() {
  let [allproducts, setAllProducts] = useState([]);
  const getProducts = () => {
    var promiseObject = axios.get("https://fakestoreapi.com/products");
    promiseObject
      .then((response) => {
        console.log("then");
        console.log(response.data);
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ marginBottom: "20px" }}>All Products</h2>
      <p style={{ marginBottom: "20px" }}>
        In React, hooks are special functions that allow you to use state and
        other React features in functional components. They were introduced in
        React 16.8 to enable developers to use state and lifecycle methods in
        functional components, which were previously only available in class
        components.
      </p>
      <button onClick={getProducts}>Get Products</button>
      <div className="allProductsData">
        {allproducts.map(function (element, index) {
          return (
            <Card
              image={element.image}
              title={element.title}
              price={element.price}
              rating={element.rating.rate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
