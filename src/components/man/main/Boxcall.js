import React from "react";
import callIcon from "../../../assets/man/CusCall_navy.png";
import styles from "./BoxCall.module.css";

// 날짜 포매팅 함수
const formatDate = (date) => {
  return `${date.getMonth() + 1}.${date.getDate()}`;
};

const BoxCall = () => {
  // 현재 날짜와 일주일 전 날짜 계산
  const currentDate = new Date();
  const lastWeekDate = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  );

  // 날짜 포매팅
  const formattedCurrentDate = formatDate(currentDate);
  const formattedLastWeekDate = formatDate(lastWeekDate);

  return (
    <div className={styles.BoxCall}>
      <div className={styles.BoxCallFirst}>
        <img className={styles.callIcon} src={callIcon} alt="아이콘" />
        <div className={styles.CallDate}>
          {formattedLastWeekDate}~{formattedCurrentDate} 기준
        </div>
      </div>

      <div className={styles.BoxCallSecond}>
        <div className={styles.smalltitle}>
          <span className={styles.smallTitleLine}>부재중</span>
          <span className={styles.smallTitleLine}>건수</span>
        </div>
        <div className={styles.smallnum}>34</div>
      </div>

      <div className={styles.BoxCallThird}>
        <div className={styles.smalltitle}>
          <span className={styles.smallTitleLine}>일</span>
          <span className={styles.smallTitleLine}>TOTAL</span>
        </div>
        <div className={styles.smallnum}>121</div>
      </div>
    </div>
  );
};

export default BoxCall;
