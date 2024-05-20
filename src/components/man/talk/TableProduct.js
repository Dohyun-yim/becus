import React, { useEffect, useState } from "react";
import styles from "./TalkTable.module.css";
import axiosInstance from "../../../lib/axios";

const TableProduct = () => {
  const [productData, setProductData] = useState([]);

  const fetchProductData = async () => {
    try {
      const response = await axiosInstance.get("api/v1/consult/product");
      setProductData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching product consult data", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <table className={styles.OrderTable}>
      <thead>
        <tr>
          <th>작성일</th>
          <th>업체명</th>
          <th>전화번호</th>
          <th>이메일</th>
          <th>문의상품</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {productData.length > 0 ? (
          productData.map((item) => (
            <tr key={item.pk}>
              <td>{new Date(item.pc_created_at).toLocaleDateString()}</td>
              <td>{item.pc_name}</td>
              <td>{item.pc_phone}</td>
              <td>{item.pc_email}</td>
              <td>{item.pc_product_id}</td>
              <td
                className={
                  item.pc_status === "요청 대기"
                    ? styles.waiting
                    : item.pc_status === "처리 완료"
                    ? styles.completed
                    : ""
                }
              >
                {item.pc_status}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">데이터가 없습니다</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableProduct;
