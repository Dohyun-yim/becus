import React from "react";
import styles from "./MiddleBoxAs.module.css";

const MiddleBoxAs = ({ counts }) => {
  return (
    <div className={styles.middleboxas}>
      <div className={styles.requestas}>
        <div className={styles.numrequestas}>{counts.request}</div>
        <div className={styles.engas}>Request</div>
        <div className={styles.koras}>요청 대기</div>
      </div>
      <div className={styles.acceptas}>
        <div className={styles.numacceptas}>{counts.accept}</div>
        <div className={styles.engas}>Accept</div>
        <div className={styles.koras}>요청 수락</div>
      </div>
      <div className={styles.completedas}>
        <div className={styles.numcompletedas}>{counts.completed}</div>
        <div className={styles.engas}>Completed</div>
        <div className={styles.koras}>처리 완료</div>
      </div>
    </div>
  );
};

export default MiddleBoxAs;
