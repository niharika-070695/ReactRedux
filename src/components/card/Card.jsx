import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card({ image, title, price, rating, id }) {
  return (
    <div className="card">
      <img src={image} width="100%" height={200} />
      <h7>{title}</h7>
      <p>${price}</p>
      <p>{rating}</p>
      <Link to={`/productdetails/${id}`}>
        <button>Product Details</button>
      </Link>
    </div>
  );
}

export default Card;
