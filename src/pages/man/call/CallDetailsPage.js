import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../../lib/axios";
import TitleCall from "../../../components/man/call/TitleCall";
import styles from "./CallDetailsPage.module.css";

function CallDetailsPage() {
  const { id } = useParams(); // URL에서 id를 가져옵니다.
  const [callData, setCallData] = useState(null);

  useEffect(() => {
    const fetchCallDetailData = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/call/${id}`);
        setCallData(response.data);
      } catch (error) {
        console.error("Error fetching call list data: ", error);
      }
    };

    fetchCallDetailData();
  }, [id]);

  const { name, date, time, cluster, keyword, summarize } = callData || {};
  return (
    <div className={styles.calldetailContainer}>
      <TitleCall title={name} />
      <div className={styles.calldetailContent}>
        <table className={styles.calldetailTable}>
          <tbody>
            <tr>
              <td>날짜</td>
              <td>{date}</td>
            </tr>
            <tr>
              <td>시간</td>
              <td>{time}</td>
            </tr>
            <tr>
              <td>분류</td>
              <td>{cluster}</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.calldetailSummaryBox}>
          <p>
            <strong>▶ 요약</strong>
          </p>
          <p>{summarize}</p>
        </div>
      </div>
      <div className={styles.calldetailButtons}>
        <Link to="/manager/call" className={styles.calldetailButton}>
          뒤로가기
        </Link>
        <Link
          to={`/manager/call/calllist/${id}/script`}
          className={styles.calldetailButton}
        >
          전체 스크립트 조회하기
        </Link>
      </div>
    </div>
  );
}

export default CallDetailsPage;
