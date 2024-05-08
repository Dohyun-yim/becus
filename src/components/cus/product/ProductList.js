import React from "react";
import styles from "./ProductList.module.css";
import products from "../../../mockdata/ProductMock.json";

function ProductList() {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div key={product.fields.part_number} className={styles.productCard}>
          <img src={product.fields.image_url} alt={product.fields.name} />
          <h3>{product.fields.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
