import React from "react";
import { Link } from "react-router-dom";
import styles from "./ListProduct.module.css";
import products from "../../../mockdata/ProductMock.json";

function ListProduct() {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <Link
          key={product.pk}
          to={`/product/${product.pk}`}
          className={styles.productCard}
        >
          <img src={product.fields.image_url} alt={product.fields.name} />
          <h3>{product.fields.name}</h3>
          <h4>{product.fields.part_number}</h4>
        </Link>
      ))}
    </div>
  );
}

export default ListProduct;
