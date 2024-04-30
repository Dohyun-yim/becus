import React, { useState, useEffect } from "react";
import axiosInstance from "../../../lib/axios";
import TableCallList from "../../../components/man/call/TableCallList";
import "./CallListPage.css";

function CallListPage() {
  const [rowData, setRowData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("name"); // 검색 카테고리 상태

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

  const filteredData = rowData.filter((item) =>
    item[searchCategory]
      .toString()
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="calllistSearchContainer">
        <select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="calllistSearchCategory"
        >
          <option value="name">이름</option>
          <option value="date">날짜</option>
          <option value="cluster">분류</option>
        </select>
        <input
          type="text"
          placeholder="검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="calllistSearchInput"
        />
      </div>
      <div className="calllistTable">
        <TableCallList rowData={filteredData} />
      </div>
    </div>
  );
}

export default CallListPage;
