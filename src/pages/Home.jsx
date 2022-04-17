import React from "react";
import { useCategory } from "../context/category-context";

export const Home = () => {
  const { showLoader, categories } = useCategory();

  return (
    <div>
      <h1>Home</h1>
      <h2>Categories</h2>
      {showLoader && <p>Loading...</p>}
      {categories.map(({ categoryName, _id }) => {
        return <h3 key={_id}>{categoryName}</h3>;
      })}
    </div>
  );
};
