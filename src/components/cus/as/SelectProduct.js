import React from "react";
import styles from "./SelectProduct.module.css";
import products from "../../../mockdata/ProductMock.json";

function SelectProduct({ goToStep2 }) {
  const handleProductClick = (product) => {
    // 수정된 부분
    goToStep2(product); // 수정된 부분
  };

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div key={product.pk} className={styles.productCard}>
          <img src={product.fields.image_url} alt={product.fields.name} />
          <h3>{product.fields.name}</h3>
          <h4>{product.fields.part_number}</h4>
          {goToStep2 && (
            <button onClick={() => handleProductClick(product)}>선택</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default SelectProduct;
