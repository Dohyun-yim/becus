import React, { useState, useEffect } from "react";
import "./AsPage.module.css";
import TitleBasic from "../../../components/man/TitleBasic";
import MiddleBoxAs from "../../../components/man/as/MiddleBoxAs";
import TableAs from "../../../components/man/as/TableAs";
import ManAsImg from "../../../assets/man/as_navy.png";

import axiosInstance from "../../../lib/axios";

const AsPage = () => {
  const [statusCounts, setStatusCounts] = useState({
    request: 0,
    accept: 0,
    completed: 0,
  });
  const [as, setAs] = useState([]);
  const fetchAs = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/repair/admin");
      const data = response.data;
      setAs(data);
      console.log("AS: ", response.data);

      const counts = data.reduce(
        (acc, item) => {
          if (item.r_status === "요청 대기") acc.request++;
          else if (item.r_status === "요청 수락") acc.accept++;
          else if (item.r_status === "처리 완료") acc.completed++;
          return acc;
        },
        { request: 0, accept: 0, completed: 0 }
      );
      setStatusCounts(counts);
    } catch (error) {
      console.log("Error fetching AS list data: ", error);
    }
  };

  useEffect(() => {
    fetchAs();
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
        <TableAs as={as} />
      </div>
    </div>
  );
};

export default AsPage;
