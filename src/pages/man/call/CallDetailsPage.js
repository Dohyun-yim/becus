import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../../lib/axios";
import TitleCall from "../../../components/man/call/TitleCall";
import "./CallDetailsPage.css";

//import mockData from "../a_mock_sample.json";

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
    <div className="container-detail">
      <TitleCall title={name} />
      <div className="content-detail">
        <table className="details-table">
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
            <tr>
              <td>키워드</td>
              <td>{keyword && keyword.join(", ")}</td>
            </tr>
          </tbody>
        </table>
        <div className="summary-box">
          <p>
            <strong>▶ 요약</strong>
          </p>
          <p>{summarize}</p>
        </div>
      </div>
      <div className="buttons-detail">
        <Link to="/manager/call" className="button-detail">
          뒤로가기
        </Link>
        <Link
          to={`/manager/call/calllist/${id}/script`}
          className="button-detail"
        >
          전체 스크립트 조회하기
        </Link>
      </div>
    </div>
  );
}

export default CallDetailsPage;
