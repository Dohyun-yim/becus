import React, { useEffect, useState } from "react";
import styles from "./SelectProduct.module.css";
import axiosInstance from "../../../lib/axios";

function SelectProduct({ goToStep2 }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/product");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError("제품 데이터를 가져오는 중 오류가 발생했습니다.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleProductClick = (product) => {
    goToStep2(product);
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.p_picture} alt={product.p_name} />
          <h3>{product.p_name}</h3>
          <h4>{product.p_number}</h4>
          {goToStep2 && (
            <button onClick={() => handleProductClick(product)}>선택</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default SelectProduct;
