import React from "react";
import styles from "./TitleSub.module.css";

const TitleSub = ({ imgSrc, title }) => {
  return (
    <div className={styles.TitleSubBox}>
      <img className={styles.TitleSubBoxImg} src={imgSrc} alt="아이콘" />
      <div className={styles.TitleSubBoxtitle}>{title}</div>
    </div>
  );
};

export default TitleSub;
