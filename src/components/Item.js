import React, { useState } from "react";


function Item({ name, category }) {
const [inCart, setInCart] = useState(false)
const toggleInCart = () => {
  setInCart(!inCart)
}

const itemName = inCart ? "in-cart" : ""
const buttonText = inCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={itemName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
