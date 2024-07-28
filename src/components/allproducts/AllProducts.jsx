import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./AllProducts.css";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/actions/productsAction";
function AllProducts() {
  let [allproducts, setAllProducts] = useState([]);
  let dispatch = useDispatch();
  let productsData = useSelector((storedata) => {
    return storedata.products;
  });
  useEffect(() => {
    if (productsData.length === 0) {
      getProducts();
    }
  }, []);
  const getProducts = () => {
    var promiseObject = axios.get("https://fakestoreapi.com/products");
    promiseObject
      .then((response) => {
        var action = productsAction(response.data);
        dispatch(action);
        console.log(action);
        console.log("then");
        console.log(response.data);
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

      <div className="allProductsData">
        {productsData.map(function (element, index) {
          return (
            <Card
              id={element.id}
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
