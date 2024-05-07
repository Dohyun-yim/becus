import React from "react";
import styles from "./TalkTable.module.css";
import mockDataProduct from "../../../mockdata/mockProduct.json";

const TableProduct = () => {
  // 작성일을 기준으로 데이터를 내림차순 정렬
  const sortedData = [...mockDataProduct].sort((a, b) => {
    return new Date(b.fields.pc_created_at) - new Date(a.fields.pc_created_at);
  });

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
        {sortedData.map((item) => (
          <tr key={item.pk}>
            <td>{item.fields.pc_created_at}</td>
            <td>{item.fields.pc_name}</td>
            <td>{item.fields.pc_phone}</td>
            <td>{item.fields.pc_email}</td>
            <td>{item.fields.pc_product_id}</td>
            <td
              className={
                item.fields.pc_status === "요청 대기"
                  ? styles.waiting
                  : item.fields.pc_status === "처리 완료"
                  ? styles.completed
                  : ""
              }
            >
              {item.fields.pc_status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableProduct;
