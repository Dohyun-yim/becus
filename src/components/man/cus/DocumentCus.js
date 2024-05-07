import React from "react";
import styles from "./DocumentCus.module.css";
import TableAllTalk from "../../man/talk/TableAllTalk"; // mockAll 데이터 테이블
import TableOrder from "../../man/talk/TableOrder"; // mockOrder 데이터 테이블
import TableProduct from "../../man/talk/TableProduct"; // mockProduct 데이터 테이블

// 가짜 데이터
import mockDataAll from "../../../mockdata/mockAll.json";
import mockDataOrder from "../../../mockdata/mockOrder.json";
import mockDataProduct from "../../../mockdata/mockProduct.json";

function DocumentCus({ customerId }) {
  // customerId와 일치하는 데이터 필터링
  const filteredAllTalk = mockDataAll.filter(
    (item) => item.customerId === customerId
  );
  const filteredOrder = mockDataOrder.filter(
    (item) => item.customerId === customerId
  );
  const filteredProduct = mockDataProduct.filter(
    (item) => item.customerId === customerId
  );

  return (
    <div>
      {filteredAllTalk.length > 0 && (
        <>
          <h2 className={styles.CusDocuTitle}>모든 통화 기록</h2>
          <TableAllTalk rowData={filteredAllTalk} />
        </>
      )}

      {filteredOrder.length > 0 && (
        <>
          <h2 className={styles.CusDocuTitle}>주문 통화 기록</h2>
          <TableOrder rowData={filteredOrder} />
        </>
      )}

      {filteredProduct.length > 0 && (
        <>
          <h2 className={styles.CusDocuTitle}>제품 통화 기록</h2>
          <TableProduct rowData={filteredProduct} />
        </>
      )}
    </div>
  );
}

export default DocumentCus;
