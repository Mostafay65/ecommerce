import React, { useEffect, useState } from "react";
import ProductMainCard from "../../Cards/ProductMainCard/ProductMainCard";
import bannar from "./../../../imgs/theme/Home/banner-4.png";

const MainBodyOfHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/products?limit=8"
        );
        const data = await response.json();
        console.log(data.data);
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
            <div className="spinner-border text-main" role="status"></div>
          </div>
        ) : (
          products.map((product) => (
            <ProductMainCard key={product.id} Product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default MainBodyOfHome;
