import React from "react";
import { Link } from "react-router-dom";
import styles from "./CallCus.module.css";

function CallCus({ rowData }) {
  return (
    <div>
      <h2 className={styles.CusCallTitle}>통화 목록</h2>
      {rowData && (
        <div>
          <table className={styles.CuscallTable}>
            <thead>
              <tr>
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
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td>{data.cluster}</td>
                  <td>
                    <div className={styles.CuskeywordContainer}>
                      {data.keyword &&
                        data.keyword.map((keyword, keywordIndex) => (
                          <div
                            key={keywordIndex}
                            className={styles.CuskeywordBox}
                          >
                            {keyword}
                          </div>
                        ))}
                    </div>
                  </td>
                  <td>
                    <Link
                      to={`/manager/calllist/call/${data.id}`}
                      className={styles.CuslinkMore}
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

export default CallCus;
