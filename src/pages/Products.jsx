import React from "react";
import { useProducts } from "../context/product-context";

export const Products = () => {
  const { products, productLoader } = useProducts();
  return (
    <div>
      <h1>Products</h1>
      {productLoader && <p>Loading...</p>}
      {products.map((item) => {
        const { _id, title, author, price } = item;
        return (
          <div key={_id}>
            <h2>{title}</h2>
            <div>{author}</div>
            <p>Rs. {price}</p>
          </div>
        );
      })}
    </div>
  );
};
