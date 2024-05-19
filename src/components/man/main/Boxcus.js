import React from "react";
import styles from "./Boxcus.module.css";
import CuspageImg from "../../../assets/man/cuspage_navy.png";

const Boxcus = () => {
  return (
    <div className={styles.boxCus}>
      <div className={styles.boxCusleft}>
        <img src={CuspageImg} alt="아이콘" className={styles.boxCusIcon} />
      </div>
      <div className={styles.boxCusRight}>
        <div className={styles.boxCusTitle}>고객용 페이지</div>
        <div className={styles.boxCusExplain}>▶ 바로 가기</div>
      </div>
    </div>
  );
};

export default Boxcus;
