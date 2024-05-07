import React, { useState, useEffect } from "react";
import axiosInstance from "../../../lib/axios";
import TableCallList from "../../../components/man/call/TableCallList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CallListPage.css";

function CallListPage() {
  const [rowData, setRowData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(new Date());
  const [searchCategory, setSearchCategory] = useState("name");

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

  const filteredData = rowData.filter((item) => {
    const itemValue = item[searchCategory].toString().toLowerCase();
    const searchValue =
      searchTerm instanceof Date
        ? searchTerm.toISOString().slice(0, 10)
        : searchTerm.toLowerCase();

    console.log(`Filtering ${itemValue} against ${searchValue}`); // 검색 값 로그 출력

    return itemValue.includes(searchValue);
  });

  const displayData = filteredData.length > 0 ? filteredData : rowData; // 결과가 없으면 전체 데이터를 보여줌

  const handleDateChange = (date) => {
    setSearchTerm(date);
  };

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
          <option value="keyword">요약</option>
        </select>
        {searchCategory === "date" ? (
          <DatePicker
            selected={searchTerm}
            onChange={handleDateChange}
            className="calllistSearchInput"
            dateFormat="yyyy-MM-dd"
          />
        ) : (
          <input
            type="text"
            placeholder="검색"
            value={typeof searchTerm === "string" ? searchTerm : ""}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="calllistSearchInput"
          />
        )}
      </div>
      <div className="calllistTable">
        <TableCallList rowData={displayData} />
      </div>
    </div>
  );
}

export default CallListPage;
