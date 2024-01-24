import React from "react";
import "./Card.css";
function Card(props) {
  const isPositive = parseFloat(props.amount) > 0;
  return (
    <div className={`main_card ${isPositive ? "positive" : "negative"}`}>
      <h1>{props.text}</h1>
      <h1>{props.amount}</h1>
    </div>
  );
}

export default Card;
