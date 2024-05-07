import React from "react";
import styles from "./TitleCall.module.css";

function TitleCall({ title }) {
  return <h1 className={styles.titleDetail}>{title}</h1>;
}

export default TitleCall;
