// TableOrder.js
import React from "react";
import styles from "./TalkTable.module.css";
import mockDataOrder from "../../../mockdata/mockOrder.json";

const TableOrder = () => {
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
        {mockDataOrder.map((item) => (
          <tr key={item.id}>
            <td>{item.작성일}</td>
            <td>{item.업체명}</td>
            <td>{item.전화번호}</td>
            <td>{item.이메일}</td>
            <td>{item.주문상품}</td>
            <td
              className={
                item.상태 === "요청 대기"
                  ? styles.waiting
                  : item.상태 === "처리 완료"
                  ? styles.completed
                  : ""
              }
            >
              {item.상태}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableOrder;
