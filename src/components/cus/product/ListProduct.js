import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ListProduct.module.css";
import axiosInstance from "../../../lib/axios";

function ListProduct() {
  const [rowData, setRowData] = useState([]);

  const fetchProductListData = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/product/");
      setRowData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching product list data: ", error);
    }
  };

  useEffect(() => {
    fetchProductListData();
  }, []);

  return (
    <div className={styles.productGrid}>
      {rowData.map((product) => (
        <Link
          key={product.id}
          to={`/cus/product/${product.id}`}
          className={styles.productCard}
        >
          <img src={product.p_picture} alt={product.p_name} />
          <h3>{product.p_name}</h3>
          <h4>{product.p_number}</h4>
        </Link>
      ))}
    </div>
  );
}

export default ListProduct;
