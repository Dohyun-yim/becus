import React, { useState } from "react";
import "./CallMainPage.css";
import CallListPage from "./CallListPage";
import CallMissListPage from "./CallMissListPage";
import ManKeywordPage from "./ManKeywordPage";

function CallMainPage() {
  const [selectedButton, setSelectedButton] = useState(1);

  // 버튼 클릭 시 해당 컨텐츠를 표시하는 함수
  const handleButtonClick = (content) => {
    setSelectedButton(content);
  };

  return (
    <div className="containercall">
      <h1 className="titlecall">통화</h1>
      <div className="content-container">
        <div className="button-container">
          <button
            className={`button-each ${selectedButton === 1 ? "active" : ""}`}
            onClick={() => handleButtonClick(1)}
          >
            통화 목록
          </button>
          <button
            className={`button-each ${selectedButton === 2 ? "active" : ""}`}
            onClick={() => handleButtonClick(2)}
          >
            부재중 통화
          </button>
        </div>
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
