import React, { useEffect, useState } from "react";
import styles from "./TalkTable.module.css";
import axiosInstance from "../../../lib/axios";
import productData from "../../../mockdata/ProductMock.json";

const TableAllTalk = () => {
  const [talkData, setTalkData] = useState([]);

  const fetchTalkData = async () => {
    try {
      const response = await axiosInstance.get("api/v1/consult/admin/global");
      setTalkData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching talk data:", error);
    }
  };

  useEffect(() => {
    fetchTalkData();
  }, []);

  const getPartNumber = (gc_product) => {
    const product = productData.find((item) => item.id === gc_product);
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
          <th>유형</th>
          <th>문의상품</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {talkData && talkData.length > 0 ? (
          talkData
            .sort(
              (a, b) => new Date(b.gc_created_at) - new Date(a.gc_created_at)
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{new Date(item.gc_created_at).toLocaleDateString()}</td>
                <td>{item.gc_name}</td>
                <td>{item.gc_phone}</td>
                <td>{item.gc_email}</td>
                <td>{item.gc_type}</td>
                <td>{getPartNumber(item.gc_product)}</td>
                <td
                  className={
                    item.gc_status === "요청 대기"
                      ? styles.waiting
                      : item.gc_status === "처리 완료"
                      ? styles.completed
                      : ""
                  }
                >
                  {item.gc_status}
                </td>
              </tr>
            ))
        ) : (
          <tr>
            <td colSpan="7">데이터가 없습니다</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableAllTalk;
