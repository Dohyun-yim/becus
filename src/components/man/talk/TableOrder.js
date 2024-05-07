import React from "react";
import styles from "./TalkTable.module.css";
import mockDataOrder from "../../../mockdata/mockOrder.json";

const TableOrder = () => {
  // 작성일을 기준으로 데이터를 내림차순 정렬
  const sortedData = [...mockDataOrder].sort((a, b) => {
    return new Date(b.o_created_at) - new Date(a.o_created_at);
  });

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
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.o_created_at}</td>
            <td>{item.o_name}</td>
            <td>{item.o_phone}</td>
            <td>{item.o_email}</td>
            <td>{item.o_product_id}</td>
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
        ))}
      </tbody>
    </table>
  );
};

export default TableOrder;
