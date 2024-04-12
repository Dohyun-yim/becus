import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../lib/axios";
import "./CallListPage.css";

//import mockData from "../a_mock_sample.json";

function CallListPage() {
  const [rowData, setRowData] = useState([]);

  // 통화 목록 데이터 추출 함수
  const fetchCallListData = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/call");
      console.log(response.data.data);
      console.log(response);
      console.log(response.data.data[0]); //
      setRowData(response.data.data);
    } catch (error) {
      console.error("Error fetching call list data:", error);
    }
  };

  useEffect(() => {
    fetchCallListData();
  }, []);

  return (
    <div>
      {/* 데이터가 존재하면 출력 */}
      {rowData && (
        <div>
          <table className="call-table">
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
              {rowData && //데이터가 있으면 뿌려준다.
                rowData.map((data) => (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                    <td>{data.cluster}</td>
                    <td>
                      <div className="keyword-container">
                        {data.keyword &&
                          data.keyword.map((keyword, keywordIndex) => (
                            <div key={keywordIndex} className="keyword-box">
                              {keyword}
                            </div>
                          ))}
                      </div>
                    </td>
                    <td>
                      <Link
                        to={`/manager/calllist/call/${data.id}`}
                        className="link-more"
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

export default CallListPage;
