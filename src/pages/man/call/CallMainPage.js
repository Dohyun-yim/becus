import React, { useState } from "react";
import styles from "./CallMainPage.module.css";
import CallListPage from "./CallListPage";
import CallMissListPage from "./CallMissListPage";

function CallMainPage() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (content) => {
    setSelectedButton(content);
  };

  return (
    <div className={styles.callContainer}>
      <h1 className={styles.callTitle}>통화</h1>
      <div className={styles.callContentContainer}>
        <div className={styles.callButtonContainer}>
          <button
            className={`${styles.callButtonEach} ${
              selectedButton === 1 ? styles.callActive : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            통화 목록
          </button>
          <button
            className={`${styles.callButtonEach} ${
              selectedButton === 2 ? styles.callActive : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            부재중 통화
          </button>
        </div>
        <div className={styles.callContent}>
          {selectedButton === 1 && <CallListPage />}
          {selectedButton === 2 && <CallMissListPage />}
        </div>
      </div>
    </div>
  );
}

export default CallMainPage;
