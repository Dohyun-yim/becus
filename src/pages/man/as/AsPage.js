import React, { useState, useEffect } from "react";
import "./AsPage.module.css";
import TitleBasic from "../../../components/man/TitleBasic";
import MiddleBoxAs from "../../../components/man/as/MiddleBoxAs";
import TableAs from "../../../components/man/as/TableAs";
import ManAsImg from "../../../assets/man/as_navy.png";

import mockDataAs from "../../../mockdata/mockAs.json"; // 데이터 임포트

const AsPage = () => {
  const [statusCounts, setStatusCounts] = useState({
    request: 0,
    accept: 0,
    completed: 0,
  });

  useEffect(() => {
    const counts = mockDataAs.reduce(
      (acc, item) => {
        if (item.상태 === "요청 대기") acc.request++;
        else if (item.상태 === "요청 수락") acc.accept++;
        else if (item.상태 === "처리 완료") acc.completed++;
        return acc;
      },
      { request: 0, accept: 0, completed: 0 }
    );
    setStatusCounts(counts);
  }, []);

  return (
    <div className="allas">
      <div className="topas">
        <TitleBasic imgSrc={ManAsImg} title="A/S 수리 현황 관리" />
      </div>
      <div className="middleas">
        <MiddleBoxAs counts={statusCounts} />
      </div>
      <div className="bottomas">
        <TableAs />
      </div>
    </div>
  );
};

export default AsPage;
