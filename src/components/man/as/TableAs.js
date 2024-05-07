import React from "react";
import styles from "./TableAs.module.css";

import mockDataAs from "../../../mockdata/mockAs.json";

const TableAs = () => {
  // 작성일을 기준으로 최신순 정렬
  const sortedData = mockDataAs.sort((a, b) => {
    return new Date(b.r_created_at) - new Date(a.r_created_at);
  });

  return (
    <table className={styles.AsTable}>
      <thead>
        <tr>
          <th>작성일</th>
          <th>업체명</th>
          <th>전화번호</th>
          <th>수리상품</th>
          <th>수리요청</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.r_created_at}</td>
            <td>{item.r_name}</td>
            <td>{item.r_phone}</td>
            <td>{item.r_product_id}</td>
            <td>{item.r_type}</td>
            <td
              className={
                item.r_status === "요청 대기"
                  ? styles.waiting
                  : item.r_status === "처리 완료"
                  ? styles.completed
                  : ""
              }
            >
              {item.r_status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAs;
