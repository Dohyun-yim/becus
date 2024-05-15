import React, { useState } from "react";
import styles from "./TalkPage.module.css"; // CSS 모듈 파일 import

import TalkOrderPage from "./TalkOrderPage";
import TalkProductPage from "./TalkProductPage";
import TalkAllPage from "./TalkAllPage";

import TitleBasic from "../../../components/man/TitleBasic";

import ManTalkImg from "../../../assets/man/talk_navy.png";

function TalkPage() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (content) => {
    setSelectedButton(content);
  };
  return (
    <div className={styles.alltalk}>
      <div className={styles.toptalk}>
        <TitleBasic imgSrc={ManTalkImg} title="견적 및 문의서 관리" />
      </div>
      <div className={styles.middletalk}>
        <div className={styles["content-container-talk"]}>
          <div className={styles["button-container-talk"]}>
            <button
              className={`${styles["button-each-talk"]} ${
                selectedButton === 1 ? styles.active : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              견적 요청서
            </button>
            <button
              className={`${styles["button-each-talk"]} ${
                selectedButton === 2 ? styles.active : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              제품 사용 문의
            </button>
            <button
              className={`${styles["button-each-talk"]} ${
                selectedButton === 3 ? styles.active : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              상담 문의
            </button>
          </div>
          <div className={styles.content}>
            {selectedButton === 1 && <TalkOrderPage />}
            {selectedButton === 2 && <TalkProductPage />}
            {selectedButton === 3 && <TalkAllPage />}
          </div>
        </div>
      </div>
      <div className={styles.bottomtalk}></div>{" "}
    </div>
  );
}

export default TalkPage;
