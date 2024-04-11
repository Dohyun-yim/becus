import React from "react";
import styles from "./TableAs.module.css";

import mockDataAs from "./mockAs.json";

// 테이블 구성 코드
const TableAs = () => {
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
        {mockDataAs.map((item) => (
          <tr key={item.id}>
            <td>{item.작성일}</td>
            <td>{item.업체명}</td>
            <td>{item.전화번호}</td>
            <td>{item.수리상품}</td>
            <td>{item.수리유형}</td>
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

export default TableAs;
