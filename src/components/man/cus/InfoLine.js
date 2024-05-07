import React from "react";
import styles from "./InfoLine.module.css";

const InfoLine = ({ imgSrc, contents }) => {
  return (
    <div className={styles.LineInfo}>
      <img className={styles.LineInfoImg} src={imgSrc} alt="아이콘" />
      <div className={styles.LineInfocontents}>{contents}</div>
    </div>
  );
};

export default InfoLine;
