import React, { useState, useEffect } from "react";
import styles from "./CallCus.module.css";

import mockCallData from "../../../mockdata/a_mock_sample.json";

const CallCus = ({ phone }) => {
  const [callList, setCallList] = useState([]);

  useEffect(() => {
    // 전화번호로 일치하는 통화 리스트를 필터링하여 설정
    const filteredCallList = mockCallData.filter(
      (call) => call.phoneNumber === phone
    );
    setCallList(filteredCallList);
  }, [phone]); // phone이 변경될 때마다 실행됩니다.

  return (
    <div>
      <h2>통화 리스트</h2>
      <table className={styles.cusCall}>
        <thead>
          <tr>
            <th>날 짜</th>
            <th>분 류</th>
            <th>키워드</th>
          </tr>
        </thead>
        <tbody>
          {callList.map((call) => (
            <tr key={call.id}>
              <td>{call.date}</td>
              <td>{call.cluster}</td>
              <td>{call.keyword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallCus;
