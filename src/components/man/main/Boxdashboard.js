import React from "react";
import styles from "./Boxdashboard.module.css"; // Assuming CSS module is used
import dashboardIcon from "../../../assets/man/dashboard_navy.png";

const Boxdashboard = () => {
  return (
    <div className={styles.Boxdashboard}>
      <div className={styles.left}>
        <img
          src={dashboardIcon}
          alt="아이콘"
          className={styles.dashboardIcon}
        />
      </div>
      <div className={styles.rightDb}>
        <div className={styles.titleDb}>DASHBOARD</div>
        <div className={styles.explainDb}>현황 보기</div>
      </div>
    </div>
  );
};

export default Boxdashboard;
