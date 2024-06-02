import React, { useState, useEffect } from "react";
import axiosInstance from "../../../lib/axios";
import TableCallList from "../../../components/man/call/TableCallList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./CallListPage.module.css";

function combineHangul(chars) {
  let combinedHangul = "";
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (/[\uAC00-\uD7AF]/.test(char)) {
      const initialConsonant = Math.floor((char.charCodeAt(0) - 44032) / 588);
      const medialVowel = Math.floor(((char.charCodeAt(0) - 44032) % 588) / 28);
      const finalConsonant = ((char.charCodeAt(0) - 44032) % 588) % 28;
      const initialUnicode = 0x1100 + initialConsonant;
      const medialUnicode = 0x1161 + medialVowel;
      if (finalConsonant !== 0) {
        const finalUnicode = 0x11a7 + finalConsonant;
        combinedHangul += String.fromCharCode(
          initialUnicode,
          medialUnicode,
          finalUnicode
        );
      } else {
        combinedHangul += String.fromCharCode(initialUnicode, medialUnicode);
      }
    } else {
      combinedHangul += char;
    }
  }
  return combinedHangul;
}

function formatDateToKorean(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${String(month).padStart(2, "0")}월 ${String(day).padStart(
    2,
    "0"
  )}일`;
}

function parseKoreanDate(dateStr) {
  const [year, month, day] = dateStr.match(/\d+/g);
  return new Date(`${year}-${month}-${day}`);
}

function CallListPage() {
  const [rowData, setRowData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");
  const [filteredData, setFilteredData] = useState([]);

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

  useEffect(() => {
    const normalizedSearchTerm =
      searchCategory === "cluster" ? searchTerm : combineHangul(searchTerm);
    const newFilteredData = rowData.filter((item) => {
      if (searchCategory === "keyword") {
        return item[searchCategory]
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else if (searchCategory === "date") {
        const itemValue = item[searchCategory]?.toString() || "";
        return itemValue.includes(normalizedSearchTerm);
      } else {
        const itemValue = item[searchCategory]?.toString().toLowerCase() || "";
        return itemValue.includes(normalizedSearchTerm);
      }
    });
    setFilteredData(newFilteredData);

    // 콘솔에 유니코드 값 출력
    console.log(`Typed value: ${searchTerm}`);
    console.log(
      `Unicode values: ${[...normalizedSearchTerm]
        .map((char) => char.charCodeAt(0))
        .join(" ")}`
    );
  }, [searchTerm, rowData, searchCategory]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleDateChange = (date) => {
    setSearchTerm(date ? formatDateToKorean(date) : "");
  };

  return (
    <div>
      <div className={styles.calllistSearchContainer}>
        <select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className={styles.calllistSearchCategory}
        >
          <option value="name">이름</option>
          <option value="date">날짜</option>
          <option value="cluster">분류</option>
          <option value="keyword">요약</option>
        </select>
        {searchCategory === "date" ? (
          <DatePicker
            selected={searchTerm ? parseKoreanDate(searchTerm) : null}
            onChange={handleDateChange}
            className={styles.calllistSearchInput}
            dateFormat="yyyy.MM.dd"
          />
        ) : (
          <input
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.calllistSearchInput}
          />
        )}
      </div>
      <div className={styles.calllistTable}>
        <TableCallList rowData={filteredData} />
      </div>
    </div>
  );
}

export default CallListPage;
