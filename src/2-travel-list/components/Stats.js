import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        {" "}
        <em>Start adding items in your packing list 🚀</em>{" "}
      </p>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything! Ready to go ✈️"
          : `💼 You have ${numItems} items in your list, and you already package 
        ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
