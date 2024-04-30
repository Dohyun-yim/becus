import React from "react";
import naverLogo from "../assets/login/naver_button.png";
import kakaoLogo from "../assets/login/kakao_button.png";
import "./LoginPage.css";

const NAVER_CLIENT_ID = "18hzVmnCAGBW303Cl527";
const REIDRECT_URI = "http://127.0.0.1:8000/api/v1/user/naver/callback";
const STATE = "false";
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REIDRECT_URI}`;

const NaverLogin = () => {
  const handleNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <div>
      <h1 className="login-title">로그인</h1>
      <p className="login-intro">BE-CUS 홈페이지에 오신 것을 환영합니다</p>
      <a href={NAVER_AUTH_URL} onClick={handleNaverLogin}>
        <img src={naverLogo} alt="네이버 로그인" className="loginImg" />
      </a>
      <img src={kakaoLogo} alt="카카오 로그인" className="loginImg" />
    </div>
  );
};
export default NaverLogin;

// eslint-disable-next-line
