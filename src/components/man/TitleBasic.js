import React from "react";
import styles from "./TitleBasic.module.css";

const TitleBasic = ({ imgSrc, title }) => {
  return (
    <div className={styles.TitleBox}>
      <img className={styles.TitleBoxImg} src={imgSrc} alt="아이콘" />
      <div className={styles.TitleBoxtitle}>{title}</div>
    </div>
  );
};

export default TitleBasic;
