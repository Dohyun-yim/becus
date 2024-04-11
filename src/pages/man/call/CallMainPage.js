import React, { useState } from "react";
import "./CallMainPage.css";
import CallListPage from "./CallListPage.js"; /* 통화 목록 버튼 페이지 */

import CallMissListPage from "./CallMissListPage.js"; /* 부재중 페이지 */
import ManKeywordPage from "./ManKeywordPage.js"; /* 키워드 페이지 */

function CallMainPage() {
  const [selectedButton, setSelectedButton] = useState(1);

  // 버튼 클릭 시 해당 컨텐츠를 표시하는 함수
  const handleButtonClick = (content) => {
    setSelectedButton(content); // 선택된 버튼 업데이트
  };

  return (
    <div className="containercall">
      <h1 className="titlecall">통화</h1>
      {/* 버튼 및 선택된 컨텐츠 표시 */}
      <div className="content-container">
        {/* 버튼 영역 */}
        <div className="button-container">
          {/* 통화 목록 버튼 */}
          <button
            className={`button-each ${selectedButton === 1 ? "active" : ""}`}
            onClick={() => handleButtonClick(1)}
          >
            통화 목록
          </button>
          {/* 부재중 조회 버튼 */}
          <button
            className={`button-each ${selectedButton === 2 ? "active" : ""}`}
            onClick={() => handleButtonClick(2)}
          >
            부재중 통화
          </button>
          {/* 키워드 조회 버튼 */}
          <button
            className={`button-each ${selectedButton === 3 ? "active" : ""}`}
            onClick={() => handleButtonClick(3)}
          >
            키워드 분류
          </button>
        </div>
        {/* 선택된 컨텐츠 표시 */}
        <div className="content">
          {selectedButton === 1 && <CallListPage />}
          {selectedButton === 2 && <CallMissListPage />}
          {selectedButton === 3 && <ManKeywordPage />}
        </div>
      </div>
    </div>
  );
}

export default CallMainPage;
