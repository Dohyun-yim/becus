import React, { useEffect, useState } from "react";
import styles from "./TalkTable.module.css";
import axiosInstance from "../../../lib/axios";
import productData from "../../../mockdata/ProductMock.json";

const TableOrder = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchOrderData = async () => {
    try {
      const response = await axiosInstance.get("api/v1/order/admin");
      setOrderData(response.data);
      console.log("견적서: ", response.data);
    } catch (error) {
      console.error("Error fetching order data: ", error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const getPartNumber = (o_product) => {
    const product = productData.find((item) => item.id === o_product);
    return product ? product.p_number : "N/A";
  };

  return (
    <table className={styles.OrderTable}>
      <thead>
        <tr>
          <th>작성일</th>
          <th>업체명</th>
          <th>전화번호</th>
          <th>이메일</th>
          <th>주문상품</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {orderData && orderData.length > 0 ? (
          orderData
            .sort((a, b) => new Date(b.o_created_at) - new Date(a.o_created_at))
            .map((item) => (
              <tr key={item.pk}>
                <td>{new Date(item.o_created_at).toLocaleDateString()}</td>
                <td>{item.o_name}</td>
                <td>{item.o_phone}</td>
                <td>{item.o_email}</td>
                <td>{getPartNumber(item.o_product)}</td>
                <td
                  className={
                    item.o_status === "요청 대기"
                      ? styles.waiting
                      : item.o_status === "처리 완료"
                      ? styles.completed
                      : ""
                  }
                >
                  {item.o_status}
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

export default TableOrder;
