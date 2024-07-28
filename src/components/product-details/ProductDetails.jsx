import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function ProductDetails() {
  let { id } = useParams();
  let productData = useSelector((storedata) => {
    return storedata.products.filter((product) => product.id == id);
  });
  useEffect(() => {
    console.log(productData);
  }, []);
  return (
    <div>
      <h2>ProductDetails:{}</h2>
      <img src={productData[0].image} width={500} height={300} />
    </div>
  );
}

export default ProductDetails;
