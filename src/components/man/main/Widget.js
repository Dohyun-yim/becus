import React from "react";
import styles from "./Widget.module.css";

const Widget = ({ imgSrc, title, smalltitle1, num1, smalltitle2, num2 }) => {
  return (
    <div className={styles.widget}>
      <img className={styles.WidgetImg} src={imgSrc} alt="아이콘" />
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div className={styles.content_left}>
          <div className={styles.smalltitle}>{smalltitle1}</div>
          <div className={styles.smallnum}>{num1}</div>
        </div>
        <div className={styles.content_right}>
          <div className={styles.smalltitle}>{smalltitle2}</div>
          <div className={styles.smallnum}>{num2}</div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
