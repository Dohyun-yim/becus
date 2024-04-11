import React, { useState } from "react";
import styles from "./TalkPage.module.css"; // CSS 모듈 파일 import

import TalkOrderPage from "./TalkOrderPage";
import TalkProductPage from "./TalkProductPage";
import TalkAllPage from "./TalkAllPage";

import TitleBasic from "../../../components/man/TitleBasic";

import ManTalkImg from "../../../assets/man/talk_navy.png";

function TalkPage() {
  const [selectedButton, setSelectedButton] = useState(1);

  // 버튼 클릭 시 해당 컨텐츠를 표시하는 함수
  const handleButtonClick = (content) => {
    setSelectedButton(content); // 선택된 버튼 업데이트
  };
  return (
    <div className={styles.alltalk}>
      {" "}
      {/* styles 객체에서 클래스 이름 가져오기 */}
      <div className={styles.toptalk}>
        {" "}
        {/* styles 객체에서 클래스 이름 가져오기 */}
        <TitleBasic imgSrc={ManTalkImg} title="견적 및 문의서 관리" />
      </div>
      <div className={styles.middletalk}>
        {" "}
        {/* styles 객체에서 클래스 이름 가져오기 */}
        <div className={styles["content-container-talk"]}>
          {" "}
          {/* 클래스 이름에 특수문자가 있을 때 사용 */}
          {/* 버튼 영역 */}
          <div className={styles["button-container-talk"]}>
            {" "}
            {/* 클래스 이름에 특수문자가 있을 때 사용 */}
            {/* 견적요청서 버튼 */}
            <button
              className={`${styles["button-each-talk"]} ${
                selectedButton === 1 ? styles.active : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              견적 요청서
            </button>
            {/* 제품 사용 문의 버튼 */}
            <button
              className={`${styles["button-each-talk"]} ${
                selectedButton === 2 ? styles.active : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              제품 사용 문의
            </button>
            {/* 상담 문의 버튼 */}
            <button
              className={`${styles["button-each-talk"]} ${
                selectedButton === 3 ? styles.active : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              상담 문의
            </button>
          </div>
          {/* 선택된 컨텐츠 표시 */}
          <div className={styles.content}>
            {" "}
            {/* styles 객체에서 클래스 이름 가져오기 */}
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
