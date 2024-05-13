import React from "react";
import styles from "./Widget.module.css";

const Widget = ({ imgSrc, title, smalltitle1, num1, smalltitle2, num2 }) => {
  return (
    <div className={styles.manmainwidget}>
      <img className={styles.manmainWidgetImg} src={imgSrc} alt="아이콘" />
      <div className={styles.manmaintitle}>{title}</div>
      <div className={styles.manmaincontent}>
        <div className={styles.manmaincontent_left}>
          <div className={styles.manmainsmalltitle}>{smalltitle1}</div>
          <div className={styles.manmainsmallnum}>{num1}</div>
        </div>
        <div className={styles.manmaincontent_right}>
          <div className={styles.manmainsmalltitle}>{smalltitle2}</div>
          <div className={styles.manmainsmallnum}>{num2}</div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
