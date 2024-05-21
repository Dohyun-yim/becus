import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CallCus.module.css";

// 날짜, 시간 가져오기
function parseDateAndTime(dateStr, timeStr) {
  const dateParts = `${dateStr.split("년")[0].trim()}.${dateStr
    .split("년")[1]
    .split("월")[0]
    .trim()}.${dateStr.split("년")[1].split("월")[1].split("일")[0].trim()}`;
  const timeParts = `${timeStr.split("시")[0].trim()}:${timeStr
    .split("시")[1]
    .split("분")[0]
    .trim()}`;
  return { dateParts, timeParts };
}

function CallCus({ rowData }) {
  const [sortedData, setSortedData] = useState([]);

  // 최신순 정렬
  useEffect(() => {
    const sorted = rowData
      .map((data) => {
        const { dateParts, timeParts } = parseDateAndTime(data.date, data.time);
        const clusterLabel = parseCluster(data.cluster);
        return {
          ...data,
          dateParts,
          timeParts,
          cluster: clusterLabel,
        };
      })
      .sort(
        (a, b) =>
          new Date(`${b.dateParts} ${b.timeParts}`) -
          new Date(`${a.dateParts} ${a.timeParts}`)
      );

    setSortedData(sorted);
  }, [rowData]);

  // 분류
  function parseCluster(cluster) {
    try {
      const clusterArray = JSON.parse(cluster);
      return Array.isArray(clusterArray) && clusterArray.length > 0
        ? clusterArray[0]
        : "";
    } catch {
      return cluster;
    }
  }

  return (
    <div>
      <table className={styles.callTable}>
        <thead>
          <tr>
            <th>날짜</th>
            <th>시간</th>
            <th>분류</th>
            <th>요약</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data) => (
            <tr key={data.id}>
              <td>{data.dateParts}</td>
              <td>{data.timeParts}</td>
              <td>
                <div>
                  <span>{data.cluster}</span>
                </div>
              </td>
              <td>{data.keyword}</td>
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
  );
}

export default CallCus;
