import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../../lib/axios";
import TitleCall from "../../../components/man/call/TitleCall";
import "./CallScriptPage.css";

//import mockData from "../a_mock_sample.json";

function CallScriptPage() {
  const { id } = useParams(); // URL에서 id를 가져옵니다.
  const [originalData, setOriginalData] = useState(null);

  // 해당 id에 해당하는 전화 데이터를 찾습니다.
  useEffect(() => {
    const fetchCallScriptData = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/call/${id}`);
        setOriginalData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching call list data: ", error);
      }
    };

    fetchCallScriptData();
  }, [id]);

  if (!originalData) {
    return <div>원본 데이터를 찾을 수 없습니다.</div>;
  }

  const { original, name } = originalData;

  return (
    <div className="message-container">
      <TitleCall title={name} />
      <div className="message-wrapper">
        {original.map((message, index) => (
          <div
            key={index}
            className={`message-wrapper ${
              message.spk === 0 ? "spk-0" : "spk-1"
            }`}
          >
            {message.msg}
          </div>
        ))}
      </div>
      <Link to={`/manager/calllist/call/${id}`} className="button-script">
        뒤로가기
      </Link>
    </div>
  );
}

export default CallScriptPage;
