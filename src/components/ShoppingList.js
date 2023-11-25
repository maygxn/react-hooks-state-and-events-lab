import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory, setSelectedCategory] = useState("All")
const categoryChange = (e) => {
  setSelectedCategory(e.target.value)
}
// You should also use the selectedCategory variable to determine which items to display in the shopping list. 
// You'll need some way of filtering the array of items based on the selectedCategory.
const displayItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={categoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
