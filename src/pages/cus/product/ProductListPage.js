import React from "react";
import ListProduct from "../../../components/cus/product/ListProduct";
import styles from "./ProductListPage.module.css";

function ProductListPage() {
  return (
    <div className={styles.ProductListContainer}>
      <h1>제품 목록</h1>
      <ListProduct />
    </div>
  );
}

export default ProductListPage;
