import React, { useState, useEffect } from "react";
import axiosInstance from "../../../lib/axios";
import TableCallList from "../../../components/man/call/TableCallList";
import "./CallListPage.css";

function CallListPage() {
  const [rowData, setRowData] = useState([]);

  // 통화 목록 데이터 추출 함수
  const fetchCallListData = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/call");
      setRowData(response.data.data);
    } catch (error) {
      console.error("Error fetching call list data:", error);
    }
  };

  useEffect(() => {
    fetchCallListData();
  }, []);

  return (
    <div>
      {/* CallTable 컴포넌트에 rowData를 props로 전달 */}
      <TableCallList rowData={rowData} />
    </div>
  );
}

export default CallListPage;
