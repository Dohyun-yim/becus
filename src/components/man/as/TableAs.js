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
          <tr key={item.pk}>
            <td>{item.fields.r_created_at}</td>
            <td>{item.fields.r_name}</td>
            <td>{item.fields.r_phone}</td>
            <td>{item.fields.r_product_id}</td>
            <td>{item.fields.r_type}</td>
            <td
              className={
                item.fields.r_status === "요청 대기"
                  ? styles.waiting
                  : item.fields.r_status === "처리 완료"
                  ? styles.completed
                  : ""
              }
            >
              {item.fields.r_status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAs;
