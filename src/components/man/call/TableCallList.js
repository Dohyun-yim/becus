import React from "react";
import { Link } from "react-router-dom";

import styles from "./TableCallList.module.css";

function TableCallList({ rowData }) {
  return (
    <div>
      {rowData && (
        <div>
          <table className={styles.callTable}>
            <thead>
              <tr>
                <th>이름</th>
                <th>날짜</th>
                <th>시간</th>
                <th>분류</th>
                <th>키워드</th>
                <th>더보기</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((data) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td>{data.cluster}</td>
                  <td>
                    <div className={styles.keywordContainer}>
                      {data.keyword &&
                        data.keyword.map((keyword, keywordIndex) => (
                          <div key={keywordIndex} className={styles.keywordBox}>
                            {keyword}
                          </div>
                        ))}
                    </div>
                  </td>
                  <td>
                    <Link
                      to={`/manager/calllist/call/${data.id}`}
                      className={styles.linkMore}
                    >
                      더보기
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
