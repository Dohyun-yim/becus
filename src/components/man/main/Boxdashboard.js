import React from "react";
import "./Boxdashboard.css";
import dashboardIcon from "../../../assets/man/dashboard_navy.png";

const Boxdashboard = () => {
  return (
    <div className="Boxdashboard">
      <div className="left">
        <img
          src={dashboardIcon}
          alt="아이콘"
          style={{ width: "60px", height: "80px" }}
        />
      </div>
      <div className="right-db">
        <div className="title-db">DASHBOARD</div>
        <div className="explain-db">현황 보기</div>
      </div>
    </div>
  );
};
export default Boxdashboard;
