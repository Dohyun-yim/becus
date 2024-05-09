import React from "react";
import DetailProduct from "../../../components/cus/product/DetailProduct";
import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage() {
  return (
    <div className={styles.ProductDetailsContainer}>
      <DetailProduct />
    </div>
  );
}

export default ProductDetailsPage;
