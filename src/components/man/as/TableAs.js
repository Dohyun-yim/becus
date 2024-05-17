import React from "react";
import styles from "./TableAs.module.css";

const TableAs = ({ as }) => {
  // 작성일을 기준으로 최신순 정렬
  const sortedData = Array.isArray(as)
    ? as
        .map((item) => ({
          ...item,
          r_created_at: item.r_created_at.split("T")[0],
          r_modified_at: item.r_modified_at.split("T")[0],
        }))
        .sort((a, b) => new Date(b.r_created_at) - new Date(a.r_created_at))
    : [];
  console.log(sortedData);

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
            <td>{item.r_created_at}</td>
            <td>{item.r_name}</td>
            <td>{item.r_phone}</td>
            <td>{item.r_product}</td>
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
