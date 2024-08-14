import React from "react";
import Products from "../Cards/ProductMainCard";

export default function () {
  return (
    <>
      <div className="container py-5">
        <div className="row">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
        </div>
      </div>
    </>
  );
}
