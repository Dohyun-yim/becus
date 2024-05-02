import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./TableCallList.module.css";

function parseDateAndTime(dateStr, timeStr) {
  // 날짜 변환 (YYYY년 MM월 DD일 -> YYYY-MM-DD)
  const dateParts =
    dateStr.split("년")[0].trim() +
    "-" +
    dateStr.split("년")[1].split("월")[0].trim() +
    "-" +
    dateStr.split("년")[1].split("월")[1].split("일")[0].trim();

  // 시간 변환 (HH시 MM분 SS초 -> HH:MM:SS)
  const timeParts =
    timeStr.split("시")[0].trim() +
    ":" +
    timeStr.split("시")[1].split("분")[0].trim() +
    ":" +
    timeStr.split("시")[1].split("분")[1].split("초")[0].trim();

  // 날짜 + 시간 합쳐서 Date 생성
  return new Date(`${dateParts} ${timeParts}`);
}

function TableCallList({ rowData }) {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (rowData) {
      const sorted = [...rowData].sort((a, b) => {
        const dateA = parseDateAndTime(a.date, a.time);
        const dateB = parseDateAndTime(b.date, b.time);
        return dateB - dateA; // 내림차순 (최신순)
      });
      setSortedData(sorted);
    }
  }, [rowData]);

  return (
    <div>
      {sortedData && (
        <div>
          <table className={styles.callTable}>
            <thead>
              <tr>
                <th>이름</th>
                <th>날짜</th>
                <th>시간</th>
                <th>분류</th>
                <th>더보기</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((data) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td>{data.cluster}</td>

                  <td>
                    <Link
                      to={`/manager/calllist/call/${data.id}`}
                      className={styles.linkMore}
                    >
                      ▶
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TableCallList;
