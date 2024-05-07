import React from "react";
import "./Boxsetting.css";

const Boxsetting = ({ imgSrc, word }) => {
  return (
    <div className="Boxsetting">
      <img className="img" src={imgSrc} alt="아이콘" />
      <div className="word">{word}</div>
    </div>
  );
};
export default Boxsetting;
