import React from "react";
import CompareProduct from "../../../components/cus/product/CompareProduct";
import styles from "./ProductDetailsPage.module.css";

function ProductComparePage() {
  return (
    <div className={styles.ProductCompareContainer}>
      <CompareProduct />
    </div>
  );
}

export default ProductComparePage;
