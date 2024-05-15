import React from "react";
import styles from "./TalkTable.module.css";
import mockDataAll from "../../../mockdata/mockAll.json";

const TableAllTalk = () => {
  const sortedData = [...mockDataAll].sort((a, b) => {
    return new Date(b.fields.gc_created_at) - new Date(a.fields.gc_created_at);
  });

  return (
    <table className={styles.OrderTable}>
      <thead>
        <tr>
          <th>작성일</th>
          <th>업체명</th>
          <th>전화번호</th>
          <th>이메일</th>
          <th>유형</th>
          <th>문의상품</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.pk}>
            <td>{item.fields.gc_created_at}</td>
            <td>{item.fields.gc_name}</td>
            <td>{item.fields.gc_phone}</td>
            <td>{item.fields.gc_email}</td>
            <td>{item.fields.gc_type}</td>
            <td>{item.fields.gc_product_id}</td>
            <td
              className={
                item.fields.gc_status === "요청 대기"
                  ? styles.waiting
                  : item.fields.gc_status === "처리 완료"
                  ? styles.completed
                  : ""
              }
            >
              {item.fields.gc_status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAllTalk;
