import React from "react";
import ProductList from "../../../components/cus/product/ProductList";
import styles from "./ProductListPage.module.css";

function ProductListPage() {
  return (
    <div className={styles.ProductListContainer}>
      <h1>제품 목록</h1>
      <ProductList />
    </div>
  );
}

export default ProductListPage;
