import React, { useEffect, useState } from "react";
import ProductMainCardHome from "../CardHome/ProductMainCardHome";

const MainBodyOfHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/products");
        const data = await response.json();
        setProducts(data.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center w-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          products.map((product) => (
            <ProductMainCardHome key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default MainBodyOfHome;
