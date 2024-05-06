import React from "react";
import kakaoLogo from "../assets/login/kakao_button.png";
import "./LoginPage.css";

const KakaoLogin = () => {
  return (
    <div>
      <a>
        <img src={kakaoLogo} al="카카로 로그인" className="loginImg" />
      </a>
    </div>
  );
};

export default KakaoLogin;
